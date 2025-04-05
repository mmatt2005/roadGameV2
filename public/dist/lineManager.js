export class LineManager {
    constructor() {
        this.lines = [];
    }
    addLine(newLine) {
        this.lines.push(newLine);
    }
    selectRandomLine() {
        return this.lines[Math.floor(Math.random() * this.lines.length)];
    }
    draw() {
        this.lines.forEach(line => line.draw());
    }
}
