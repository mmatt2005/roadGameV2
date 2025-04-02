import { Line } from "./line";

export class LineManager {
    lines: Line[] = []
    
    addLine(newLine: Line) {
        this.lines.push(newLine)
    }

    draw() { 
        this.lines.forEach(line => line.draw())
    }
}