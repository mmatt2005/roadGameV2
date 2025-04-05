import { getClosestPoint } from "./createMap";
import { canvas } from "./main";
import { getPath } from "./pathfinding";
import { Point } from "./point";

export class Debug {
    timesClicked: number = 0;
    startingPoint: Point | null = null
    endingPoint: Point | null = null
    constructor() {
        this.listener()


    }

    listener() {
        canvas.addEventListener("click", event => {
            const closestPoint = getClosestPoint({ x: event.x, y: event.y })



            const endingPtCheckbox = document.getElementById("selectEndingPt") as HTMLInputElement
            if (!endingPtCheckbox) return console.log("NOPE")

            if (!endingPtCheckbox.checked) {
                if (closestPoint.color !== "green") { 
                    closestPoint.setColor("green")
                    this.startingPoint = closestPoint
                } else { 
                    closestPoint.setColor("black")
                    this.startingPoint = null
                }
            } else {
                if (closestPoint.color !== "red") {
                    closestPoint.setColor("red")
                    this.endingPoint = closestPoint
                } else {
                    closestPoint.setColor("black")
                    this.endingPoint = null
                }
            }


            console.log(this)

            if (this.startingPoint && this.endingPoint) { 
                console.log("WE have all the data")
                const pts = getPath(this.startingPoint, this.endingPoint)
                pts.forEach(pt => pt.setColor("white"))
            }


            // const neighborNodes = getNeighborNodes(closestPoint)

            // console.log(neighborNodes)

            // neighborNodes.forEach(node => node.setColor("red"))

            // this.timesClicked += 1
        })
    }
}