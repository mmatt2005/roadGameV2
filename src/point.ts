import { POINT_SIZE } from "./constants.js"
import { context } from "./main.js"
import { uuidv4 } from "./utils.js"

export type Coordinate = {x: number, y: number}

export class Point { 
    x: number = 0
    y: number = 0
    color: string = "black"
    width: number = POINT_SIZE
    height: number = POINT_SIZE
    id: string = uuidv4()
    
    setPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }

    setColor(newColor: string) { 
        this.color = newColor
    }

    centerX(): number { 
        return this.x + (this.width / 2)
    }

    centerY(): number { 
        return this.y + (this.height / 2)
    }

    draw() { 
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}