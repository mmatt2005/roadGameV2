export class VehicleManager {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(newVehicle) {
        this.vehicles.push(newVehicle);
    }
    draw() {
        this.vehicles.forEach(vehicle => vehicle.draw());
    }
}
