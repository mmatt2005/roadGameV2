"use client"
import { Call } from "@/public/dist/call"
import { Button } from "../ui/button"
import { useEffect } from "react"
import { Vehicle } from "@/public/dist/vehicle"
import { EmergencyVehicle } from "@/public/dist/emergencyVehicle"

export default function CallUi({ call, vehicles }: {
    call: Call | null
    vehicles: EmergencyVehicle[]
}) {
    if (!call) return <>call is null</>

    // filler commit 4/10/25
    // Filler commit 4/11/25

    return <div className="">
        <h1>Call Ui</h1>
        <p>
            {
                JSON.stringify(call, null, 2)
            }
        </p>


            <p>Attach Vehicle</p>
            {
                vehicles.map((vehicle, index) =>  <div key={vehicle.id} className="">
                    {vehicle.name}
                </div> )
            }
    </div>
}