import { Vehicle } from "./vehicle";

export class VehicleManager { 
    vehicles: Vehicle[] = []


    addVehicle(newVehicle: Vehicle) {
        this.vehicles.push(newVehicle)
    }

    draw() { 
        this.vehicles.forEach(vehicle => vehicle.draw())
    }
}