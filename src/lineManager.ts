import { Line } from "./line.js";
import { Point } from "./point.js";

export class LineManager {
    lines: Line[] = []

    addLine(newLine: Line) {
        this.lines.push(newLine)
    }

    selectRandomLine() {
        return this.lines[Math.floor(Math.random() * this.lines.length)]
    }


    /**
     * 4/5/25 12:16pm
     * @description selects a random point on a line.
     * @returns {*} 
     */
    selectRandomPointOnLine(): Pick<Point, "x" | "y"> {
        const selectedLine = this.selectRandomLine()

        // This is a vertical line so select a random y value
        if (selectedLine.point1.x === selectedLine.point2.x) {
            const maxY = Math.max(selectedLine.point1.y, selectedLine.point2.y)
            const minY = Math.min(selectedLine.point1.y, selectedLine.point2.y)

            const randomY = Math.floor(Math.random() * (maxY - minY + 1) + minY)

            return { x: selectedLine.point1.x, y: randomY }
        } else {
            // horizontal line so select a random x value
            const maxX = Math.max(selectedLine.point1.x, selectedLine.point2.x)
            const minX = Math.min(selectedLine.point1.x, selectedLine.point2.x)

            const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX)

            return { x: randomX, y: selectedLine.point1.y }
        }
    }

    draw() {
        this.lines.forEach(line => line.draw())
    }
}