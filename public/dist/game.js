import { callManager, canvas, context, lineManager, pointManager, vehicleManager } from "./main.js";
export class Game {
    loop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.draw();
        window.requestAnimationFrame(() => this.loop());
    }
    draw() {
        lineManager.draw();
        pointManager.draw();
        vehicleManager.draw();
        callManager.draw();
    }
}
