import { Point } from "./point";

export class PointManager {
    points: Point[] = []

    addPoint(newPoint: Point) { 
        this.points.push(newPoint)
    }

    getPoint(pointId: string) { 
        return this.points.find(({id}) => id === pointId)
    }

    draw() {
        this.points.forEach((point) => point.draw())
    }
}