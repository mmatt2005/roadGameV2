import { canvas, context, lineManager, player, pointManager } from "./main";

export class Game  { 
    loop() {
        context.clearRect(0, 0, canvas.width, canvas.height)
        this.draw()

        window.requestAnimationFrame(() => this.loop())
    }

    draw() {
        player.draw()
        lineManager.draw()
        pointManager.draw()
    }
}