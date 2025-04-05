import { context } from "./main.js"

// @ts-ignore
import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";

export class Point { 
    x: number = 0
    y: number = 0
    color: string = "black"
    width: number = 15
    height: number = 15
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