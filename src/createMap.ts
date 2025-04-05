import { MAX_MAP_POINTS } from "./constants.js"
import { Line } from "./line.js"
import { lineManager, pointManager } from "./main.js"
import { Point } from "./point.js"


export function getClosestPoint(startingPoint: Pick<Point, "x" | "y">): Point {
    return pointManager.points.sort((pointA, pointB) => {
        const pointADistance = Math.sqrt(Math.pow(startingPoint.x - pointA.x, 2) + Math.pow(startingPoint.y - pointA.y, 2))
        const pointBDistance = Math.sqrt(Math.pow(startingPoint.x - pointB.x, 2) + Math.pow(startingPoint.y - pointB.y, 2))

        if (pointADistance < pointBDistance) return -1
        return 0
    })[0]
}

export function createMap(points: Point[]) {
    if (points.length >= MAX_MAP_POINTS) {
        console.log("Reached base case...")
        return
    }

    function selectRandomPoint() {
        return pointManager.points[Math.floor(Math.random() * pointManager.points.length)]
    }

    function selectRandomDirection() {
        const DIRECTIONS = ["left", "right", "top", "bottom"] as const

        return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]
    }

    function generateRandomXValue(minX: number, maxX: number): number {
        return Math.floor(Math.random() * (maxX - minX + 1) + minX)
    }

    function generateRandomYValue(minY: number, maxY: number): number {
        return Math.floor(Math.random() * (maxY - minY + 1) + minY)
    }



    function wasPointGeneratedToCloseToAnother(generatedPoint: Point, closestPoint: Point): boolean {
        if (Math.abs(generatedPoint.x - closestPoint.x) < 100 && Math.abs(generatedPoint.y - closestPoint.y) < 100) {
            return true
        }

        return false
    }

    if (points.length === 0) {
        const firstPoint = new Point()
        firstPoint.setPosition(window.innerWidth / 2, 200)
        pointManager.addPoint(firstPoint)

        return createMap(pointManager.points)
    }


    const selectedPoint = selectRandomPoint()
    const direction = selectRandomDirection()

    if (direction === "left") {
        const leftPoint = new Point()
        leftPoint.setPosition(
            generateRandomXValue(0, selectedPoint.x),
            selectedPoint.y
        )

        if (wasPointGeneratedToCloseToAnother(leftPoint, getClosestPoint(leftPoint))) return createMap(pointManager.points)
        pointManager.addPoint(leftPoint)
        lineManager.addLine(new Line(selectedPoint, leftPoint))

        return createMap(pointManager.points)


    } else if (direction === "right") {
        const rightPoint = new Point()
        rightPoint.setPosition(
            generateRandomXValue(selectedPoint.x, window.innerWidth - rightPoint.width),
            selectedPoint.y
        )

        if (wasPointGeneratedToCloseToAnother(rightPoint, getClosestPoint(rightPoint))) return createMap(pointManager.points)
        lineManager.addLine(new Line(selectedPoint, rightPoint))

        pointManager.addPoint(rightPoint)

        return createMap(pointManager.points)
    } else if (direction === "top") {
        const topPoint = new Point()
        topPoint.setPosition(
            selectedPoint.x,
            generateRandomYValue(0, selectedPoint.y)
        )

        if (wasPointGeneratedToCloseToAnother(topPoint, getClosestPoint(topPoint))) return createMap(pointManager.points)
        lineManager.addLine(new Line(selectedPoint, topPoint))

        pointManager.addPoint(topPoint)

        return createMap(pointManager.points)
    } else if (direction === "bottom") {
        const bottomPoint = new Point()
        bottomPoint.setPosition(
            selectedPoint.x,
            generateRandomYValue(selectedPoint.y, window.innerHeight - bottomPoint.height)
        )

        if (wasPointGeneratedToCloseToAnother(bottomPoint, getClosestPoint(bottomPoint))) return createMap(pointManager.points)
        lineManager.addLine(new Line(selectedPoint, bottomPoint))
        pointManager.addPoint(bottomPoint)

        return createMap(pointManager.points)
    }
}