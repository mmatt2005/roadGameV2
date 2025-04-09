"use client"

import { EmergencyVehicle } from "@/public/dist/emergencyVehicle"
import { VehicleManager } from "@/public/dist/vehicleManager"
import { Button } from "../ui/button"


export default function DefaultUi({ vehicleManager } : { 
    vehicleManager: VehicleManager | null
}) {


    if (!vehicleManager) return <>no vehicle manager...</>

    return <div className="">
        <h1>default ui</h1>
        <Button
            onClick={() => {
                vehicleManager.addVehicle(new EmergencyVehicle("police"))
            }}
        >Buy Police car</Button>
    </div>
}