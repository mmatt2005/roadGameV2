import { EmergencyVehicle } from "./emergencyVehicle.js";
import { events, lineManager } from "./main.js";
export class VehicleManager {
    constructor() {
        this.vehicles = [];
    }
    /** @description spawn the vehicles the player starts out with */
    spawnDefaultVehicles() {
        // We need this timeout because the game is created to fast before nextjs has rendered our ui so the vehciles state is [] still...
        setTimeout(() => {
            const police1 = new EmergencyVehicle("police");
            const police1_pos = lineManager.selectRandomPointOnLine();
            police1.setPosition(police1_pos.x, police1_pos.y);
            this.addVehicle(police1);
            const fire1 = new EmergencyVehicle("fire");
            const fire1_pos = lineManager.selectRandomPointOnLine();
            fire1.setPosition(fire1_pos.x, fire1_pos.y);
            this.addVehicle(fire1);
            const ems1 = new EmergencyVehicle("ems");
            const ems1_pos = lineManager.selectRandomPointOnLine();
            ems1.setPosition(ems1_pos.x, ems1_pos.y);
            this.addVehicle(ems1);
        }, 10);
    }
    addVehicle(newVehicle) {
        this.vehicles.push(newVehicle);
        events.updateVehiclesUi();
    }
    /**
     * 4/7/25
     * @description gets the total number of a type of emergency type. Doesnt care about status or anything else.
     * @param {EmergencyVehicle["type"]} emergencyVehicleType
     * @returns {number}
     */
    getNumberOfEmergencyVehicles(emergencyVehicleType) {
        return this.vehicles.filter(vehicle => vehicle instanceof EmergencyVehicle).filter(vehicle => vehicle.type === emergencyVehicleType).length;
    }
    draw() {
        this.vehicles.forEach(vehicle => vehicle.draw());
    }
}
