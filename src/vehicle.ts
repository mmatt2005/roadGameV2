import { context } from "./main.js"
import { Point } from "./point.js"
import { uuidv4 } from "./utils.js"

export class Vehicle {
    x: number = 0
    y: number = 0
    width: number = 25
    height: number = 25
    color: string = "red"
    id: string = uuidv4()

    movingTo: Point[] | null = null

    setPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }

    moveTo(path: Point[]): void {
        this.movingTo = path
    }

    
    /** @description runs when the vehicle has reached its endingPoint */
    onMovingToComplete() {}

    move(targetPoint: Point) {
        console.log("Ruinning.")

        if (this.movingTo?.length === 0) {
            this.movingTo = null
            console.log("Reached final point")

            return this.onMovingToComplete()
        }


        const tolerance = 1

        // Use tolerance because sometimes if the target is (100, 100) the vehicle will get stuck at (99, 100)
        if ((Math.abs(this.x - targetPoint.x)) <= tolerance && Math.abs(this.y - targetPoint.y) <= tolerance) {
            console.log("Moving to next point...")
            console.log(this.movingTo)
            this.movingTo?.shift()

        }


        if (this.x > targetPoint.x) {
            this.x -= 1
        } else {
            this.x += 1
        }

        if (this.y > targetPoint.y) {
            this.y -= 1
        } else {
            this.y += 1
        }


    }

    draw() {
        if (this.movingTo) {
            this.move(this.movingTo[0])
        }



        context.beginPath()
        context.arc(this.x + 6, this.y + 6, 12, 0, 2 * Math.PI)
        context.fillStyle = "blue"
        context.fill()
        // context.fillStyle = this.color
        // context.fillRect(this.x, this.y, this.width, this.height)


    }
}