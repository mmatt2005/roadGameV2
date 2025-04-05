"use client"
import { Point } from "@/public/dist/point.js"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Debug } from "@/public/dist/debug"

export default function PointUi({ point }: {
    point: Point
}) {

    const [debug, setDebug] = useState<Debug | null>(null)

    useEffect(() => {
        // Only run this code on the client
        import("@/public/dist/main.js").then(mod => {
            const debugInstance: Debug = mod.debug

            setDebug(debugInstance)
        })
    }, [])


    if (!debug) return <>No debug object...</>
    return <div className="">
        <h1>Point Ui</h1>
        {
            JSON.stringify(point, null, 2)
        }

        <Button
            className="bg-green-500"
            onClick={() => {
                point.setColor("green")
                debug.startingPoint = point
            }}
        >Set as start</Button>

        <Button
            className="bg-red-500"
            onClick={() => {
                point.setColor("red")
                debug.endingPoint = point
            }}
        >Set as end</Button>

        <Button
            onClick={() => {
                debug.debug_pathfinding()
            }}
        >Debug pathfinding</Button>
    </div>
}