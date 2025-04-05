import { Line } from "./line";

export class LineManager {
    lines: Line[] = []
    
    addLine(newLine: Line) {
        this.lines.push(newLine)
    }

    selectRandomLine() {
        return this.lines[Math.floor(Math.random() * this.lines.length)]
    }

    draw() { 
        this.lines.forEach(line => line.draw())
    }
}