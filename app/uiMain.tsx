"use client"
import CallUi from "@/components/gameObjects/callUi";
import PointUi from "@/components/gameObjects/pointUi";
import { Call } from "@/public/dist/call";
import { UI_WIDTH } from "@/public/dist/constants";
import { Point } from "@/public/dist/point";
import { UiManager } from "@/public/dist/uiManager";
import { NewUiState, UiStateObject } from "@/src/uiManager";

import { useEffect, useState } from "react";
export default function UiMain() {

    const [ui, setUi] = useState<NewUiState>({ uiState: "default", object: "default" })

    useEffect(() => {
        // Only run this code on the client
        import("@/public/dist/main.js").then(mod => {
            const uiManagerInstance = mod.uiManager


            function handleStateChange(event: NewUiState) {
                setUi(event)
            }
            uiManagerInstance.on("uiStateChange", handleStateChange)

            return () => {
                uiManagerInstance.off("uiStateChange", handleStateChange)
            }
        })
    }, [])



    return <div
        className="h-screen border-l"
        style={{ width: `${UI_WIDTH}px` }}
    >
        {
            ui && (
                ui.uiState === "call" ? (
                    <CallUi call={ui.object as Call} />
                ) : ui.uiState === "point" ? (
                    <PointUi point={ui.object as Point}/>
                ) : "default"
            )
        }
    </div>
}