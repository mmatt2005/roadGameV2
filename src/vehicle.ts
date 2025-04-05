import { context } from "./main"
import { Point } from "./point"

export class Vehicle { 
    x: number = 0
    y: number = 0
    width: number = 25
    height: number = 25
    color: string = "red" 

    movingTo: Point | null = null

    setPosition(x: number, y: number) { 
        this.x = x
        this.y = y
    }

    moveTo(endPoint: Point): void { 
        this.movingTo = endPoint
    }

    move(endPoint: Point) { 
    if (this.x !== endPoint.x) {
            if (this.x > endPoint.x) {
                this.x -= 1
            } else { 
                this.x += 1
            }
        } else { 
            if (this.y > endPoint.y) {
                this.y -= 1
            } else { 
                this.y += 1
            }
        }
    }

    draw() { 
        if (this.movingTo) {
            this.move(this.movingTo)
        }

        


        context.beginPath()
        context.arc(this.x + 6, this.y + 6, 12, 0, 2 * Math.PI)
        context.fillStyle = "blue"
        context.fill()
        // context.fillStyle = this.color
        // context.fillRect(this.x, this.y, this.width, this.height)


    }
}