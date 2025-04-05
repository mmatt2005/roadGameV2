import { Call } from "./call.js";
import { lineManager } from "./main.js";
import { Point } from "./point.js";

export class CallManager {
    calls: Call[] = []

    addCall(newCall: Call) {
        this.calls.push(newCall)
    }

    createCallLocation(): Pick<Point, "x" | "y"> {
        const randomLine = lineManager.selectRandomLine()


        if (randomLine.point1.x === randomLine.point2.x) {
            const max = Math.max(randomLine.point1.y, randomLine.point2.y)
            const min = Math.min(randomLine.point1.y, randomLine.point2.y)

            const randomY = Math.floor(Math.random() * (max - min) + min)
            return {x: randomLine.point1.x, y: randomY}
        } else {
            const max = Math.max(randomLine.point1.x, randomLine.point2.x)
            const min = Math.min(randomLine.point1.x, randomLine.point2.x)

            const randomX = Math.floor(Math.random() * (max - min) + min)
            return {x: randomX, y: randomLine.point1.y}
        }

    }

    draw() {
        this.calls.forEach(call => call.draw())
    }
}