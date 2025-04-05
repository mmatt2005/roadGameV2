import { getClosestPoint } from "./createMap.js";
import { canvas } from "./main.js";
import { getPath } from "./pathfinding.js";
export class Debug {
    constructor() {
        this.timesClicked = 0;
        this.startingPoint = null;
        this.endingPoint = null;
        this.listener();
    }
    listener() {
        canvas.addEventListener("click", event => {
            const closestPoint = getClosestPoint({ x: event.x, y: event.y });
            const endingPtCheckbox = document.getElementById("selectEndingPt");
            if (!endingPtCheckbox)
                return console.log("NOPE");
            if (!endingPtCheckbox.checked) {
                if (closestPoint.color !== "green") {
                    closestPoint.setColor("green");
                    this.startingPoint = closestPoint;
                }
                else {
                    closestPoint.setColor("black");
                    this.startingPoint = null;
                }
            }
            else {
                if (closestPoint.color !== "red") {
                    closestPoint.setColor("red");
                    this.endingPoint = closestPoint;
                }
                else {
                    closestPoint.setColor("black");
                    this.endingPoint = null;
                }
            }
            console.log(this);
            if (this.startingPoint && this.endingPoint) {
                console.log("WE have all the data");
                const pts = getPath(this.startingPoint, this.endingPoint);
                pts.forEach(pt => pt.setColor("white"));
            }
            // const neighborNodes = getNeighborNodes(closestPoint)
            // console.log(neighborNodes)
            // neighborNodes.forEach(node => node.setColor("red"))
            // this.timesClicked += 1
        });
    }
}
