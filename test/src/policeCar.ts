import { context } from "./main"
import { Vehicle } from "./vehicle"

export class PoliceCar extends Vehicle {

    isLightsOn: boolean = false

    turnLightsOn() {
        this.isLightsOn = true
    }

    turnLightsOff() {
        this.isLightsOn = false
    }

    draw() {
        if (this.movingTo) {
            this.move(this.movingTo);
        }
    
        const centerX = this.x + 6;
        const centerY = this.y + 6;
        const baseRadius = 12;
    
        if (this.isLightsOn) {
            const time = performance.now();
            const pulse = Math.sin(time / 200) * 2 + 2
    
            context.beginPath();
            context.arc(centerX, centerY, baseRadius + pulse, 0, 2 * Math.PI);
            context.fillStyle = "rgba(255, 255, 255, 0.2)";
            context.fill();
        }
    
        // Draw main circle
        context.beginPath();
        context.arc(centerX, centerY, baseRadius, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
    }
    
    

}