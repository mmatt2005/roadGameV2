"use client"
import CallUi from "@/components/gameObjects/callUi";
import DefaultUi from "@/components/gameObjects/defaultUi";
import EmergencyVehicleUi from "@/components/gameObjects/emergencyVehicleUi";
import PointUi from "@/components/gameObjects/pointUi";
import { Call } from "@/public/dist/call";
import { UI_WIDTH } from "@/public/dist/constants";
import { EmergencyVehicle } from "@/public/dist/emergencyVehicle";
import { Point } from "@/public/dist/point";
import { UiState } from "@/src/events";
import { setCanvas } from "@/public/dist/main";

import { useEffect, useState } from "react";


export default function UiMain() {

    const [ui, setUi] = useState<UiState>({ state: "default", selectedObject: "default" })
    const [calls, setCalls] = useState<Call[]>([])
    const [vehicles, setVehicles] = useState<EmergencyVehicle[]>([])

    useEffect(() => {
        // Only run this code on the client
        import("@/public/dist/main.js").then(mod => {
            const events = mod.events


            function handleCallsUpdate(newCalls: Call[]) {
                setCalls(prev => ([...newCalls]))
            }

            function handleVehiclesUpdate(newVehicles: EmergencyVehicle[]) {
                setVehicles(prev => ([...newVehicles]))
            }

            function handleUiUpdate(newUi: UiState) {
                setUi(prev => ({ ...newUi }))
            }

            events.on("updateUi_calls", handleCallsUpdate)
            events.on("updateUi", handleUiUpdate)
            events.on("updateUi_vehicles", handleVehiclesUpdate)


            return () => {
                events.off("updateUi_calls", handleCallsUpdate)
                events.off("updateUi", handleUiUpdate)
                events.off("updateUi_vehicles", handleVehiclesUpdate)
            }
        })

        setCanvas()
    }, [])


    /**
     * @description this will always return the most recent version of a call object
     *
     * @param {Call} selectedCall 
     * @returns {(Call | null)} 
     */
    function findCall(selectedCall: Call): Call | null {

        console.log(calls)
        return calls.find(({ id }) => id === selectedCall.id) || null
    }



    return <div
        className="h-screen border-l"
        style={{ width: `${UI_WIDTH}px` }}
    >
        {
            ui && (
                ui.state === "call" ? (
                    <CallUi call={findCall((ui.selectedObject as Call))} vehicles={vehicles} />
                ) : ui.state === "point" ? (
                    <PointUi point={ui.selectedObject as Point} />
                ) : ui.state === "vehicle" ? (
                    <EmergencyVehicleUi emergencyVehicle={ui.selectedObject as EmergencyVehicle} />
                ) : <DefaultUi/>
            )
        }
    </div>
}