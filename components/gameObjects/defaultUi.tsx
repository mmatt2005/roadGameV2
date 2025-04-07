"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { EmergencyVehicle } from "@/public/dist/emergencyVehicle"
import { CallManager } from "@/public/dist/callManager"
import { VehicleManager } from "@/public/dist/vehicleManager"


export default function DefaultUi() {

    const [vehicleManager, setVehicleManager] = useState<VehicleManager | null>(null)

    useEffect(() => {
        // Only run this code on the client
        import("@/public/dist/main.js").then(mod => {

            // setDefaultUi(prev => (
            //     {
            //         callManager: (mod.callManager as unknown as CallManager),
            //         vehicleManager: (mod.vehicleManager as unknown as VehicleManager)
            //     }
            // ))
            
            setVehicleManager(mod.vehicleManager)
        })
    }, [])




    if (!vehicleManager) return <>35</>

    return <div className="">
        <h1>default ui</h1>
        <Button
            onClick={() => {
                vehicleManager.addVehicle(new EmergencyVehicle("police"))
            }}
        >Buy Police car</Button>
    </div>
}