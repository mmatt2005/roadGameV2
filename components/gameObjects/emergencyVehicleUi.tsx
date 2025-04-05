import { EmergencyVehicle } from "@/public/dist/emergencyVehicle";

export default function EmergencyVehicleUi({ emergencyVehicle } : { 
    emergencyVehicle: EmergencyVehicle
}) { 
    return <div className="">
        <h1>Emergency vehicle</h1>
        {
            JSON.stringify(emergencyVehicle, null, 2)
        }
    </div>
}