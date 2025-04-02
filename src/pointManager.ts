import { Point } from "./point";

export class PointManager {
    points: Point[] = []

    addPoint(newPoint: Point) { 
        this.points.push(newPoint)
    }

    draw() {
        this.points.forEach((point) => point.draw())
    }
}