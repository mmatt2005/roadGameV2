export class PointManager {
    constructor() {
        this.points = [];
    }
    addPoint(newPoint) {
        this.points.push(newPoint);
    }
    getPoint(pointId) {
        return this.points.find(({ id }) => id === pointId);
    }
    draw() {
        this.points.forEach((point) => point.draw());
    }
}
