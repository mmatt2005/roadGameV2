import { context } from "./main"

export class Point { 
    x: number = 0
    y: number = 0
    color: string = "blue"
    width: number = 50
    height: number = 50

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