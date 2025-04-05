import { context } from "./main.js";
import { Vehicle } from "./vehicle.js";
export class EmergencyVehicle extends Vehicle {
    constructor(type) {
        super();
        this.color = "0,0,0";
        this.isLightsOn = false;
        this.type = type;
        /*
        Sets the color of the vehicle based on the type ex police = blue, fire = red....
        These values should only be the rgb numbers do not put the full "rgb()" string
        */
        if (this.type === "police") {
            this.color = "0,0,255";
        }
        else if (this.type === "fire") {
            this.color = "255,0,0";
        }
        else if (this.type === "ems") {
            this.color = "255,255,255";
        }
    }
    /**
     * 4/5/25 11:06
     * @description turns the emergency vehicles lights on
     */
    turnLightsOn() {
        this.isLightsOn = true;
    }
    /**
     * 4/5/25 11:07
     * @description turns the emergency vehicles lights off
     */
    turnLightsOff() {
        this.isLightsOn = false;
    }
    draw() {
        if (this.movingTo) {
            this.move(this.movingTo[0]);
        }
        const centerX = this.x + 6;
        const centerY = this.y + 6;
        const baseRadius = 12;
        if (this.isLightsOn) {
            const time = performance.now();
            const pulse = Math.sin(time / 200) * 2 + 3;
            context.beginPath();
            context.arc(centerX, centerY, baseRadius + pulse, 0, 2 * Math.PI);
            context.fillStyle = `rgba(${this.color}, 0.2)`;
            context.fill();
        }
        // Draw main circle
        context.beginPath();
        context.arc(centerX, centerY, baseRadius, 0, 2 * Math.PI);
        context.fillStyle = `rgb(${this.color})`;
        context.fill();
    }
}
