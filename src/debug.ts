import { Call } from "./call.js";
import { canvas, uiManager } from "./main.js";
import { Point } from "./point.js";
import { getClosestGameObject } from "./utils.js";

export class Debug {
    timesClicked: number = 0;
    startingPoint: Point | null = null
    endingPoint: Point | null = null
    constructor() {
        this.listener()


    }

    listener() {
        canvas.addEventListener("click", event => {
            const closestGameObject = getClosestGameObject({ x: event.x, y: event.y })

            // There wasnt any game objects close to where the player clicked
            if (!closestGameObject) return


            if (closestGameObject instanceof Call) {
                uiManager.setUiState("call", closestGameObject)
            } else if (closestGameObject instanceof Point) {
                uiManager.setUiState("point", closestGameObject)
            }

        })
    }
}