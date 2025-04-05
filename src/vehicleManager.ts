import { EmergencyVehicle } from "./emergencyVehicle.js";
import { lineManager } from "./main.js";
import { Vehicle } from "./vehicle.js";

export class VehicleManager { 
    vehicles: Vehicle[] = []

    constructor() { 
        this.spawnDefaultVehicles()
    }

    
    /** @description spawn the vehicles the player starts out with */
    spawnDefaultVehicles() { 
        const police1 = new EmergencyVehicle("police")
        const police1_pos = lineManager.selectRandomPointOnLine()
        police1.setPosition(police1_pos.x, police1_pos.y)
        this.addVehicle(police1)

        const fire1 = new EmergencyVehicle("fire")
        const fire1_pos = lineManager.selectRandomPointOnLine()
        fire1.setPosition(fire1_pos.x, fire1_pos.y)
        this.addVehicle(fire1)

        const ems1 = new EmergencyVehicle("ems")
        const ems1_pos = lineManager.selectRandomPointOnLine()
        ems1.setPosition(ems1_pos.x, ems1_pos.y)
        this.addVehicle(ems1)
    }

    addVehicle(newVehicle: Vehicle) {
        this.vehicles.push(newVehicle)
    }

    draw() { 
        this.vehicles.forEach(vehicle => vehicle.draw())
    }
}