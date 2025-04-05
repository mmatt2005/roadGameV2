import { Call } from "./call.js";
import { callManager, canvas, uiManager, vehicleManager } from "./main.js";
import { getPath } from "./pathfinding.js";
import { Point } from "./point.js";
import { EmergencyVehicle } from "./emergencyVehicle.js";
import { getClosestGameObject } from "./utils.js";
import { Vehicle } from "./vehicle.js";
export class Debug {
    constructor() {
        this.timesClicked = 0;
        this.startingPoint = null;
        this.endingPoint = null;
        this.listener();
    }
    listener() {
        canvas.addEventListener("click", event => {
            const closestGameObject = getClosestGameObject({ x: event.x, y: event.y });
            // There wasnt any game objects close to where the player clicked
            if (!closestGameObject)
                return;
            if (closestGameObject instanceof Call) {
                uiManager.setUiState("call", closestGameObject);
            }
            else if (closestGameObject instanceof Point) {
                uiManager.setUiState("point", closestGameObject);
            }
            else if (closestGameObject instanceof Vehicle) {
                uiManager.setUiState("vehicle", closestGameObject);
            }
        });
    }
    debug_pathfinding() {
        if (!this.startingPoint || !this.endingPoint) {
            console.group("Failed to debug pathfinding due to no starting or ending point");
            return;
        }
        const path = getPath(this.startingPoint, this.endingPoint);
        console.log(path);
        const debugVehicle = new EmergencyVehicle("ems");
        debugVehicle.setPosition(path[0].x, path[0].y);
        debugVehicle.turnLightsOn();
        debugVehicle.moveTo(path);
        vehicleManager.addVehicle(debugVehicle);
        debugVehicle.onMovingToComplete = () => {
            debugVehicle.turnLightsOff();
        };
        path.forEach(point => {
            point.setColor("yellow");
        });
    }
    async debug_createCallAtPoint(point) {
        const call = callManager.createNewCall(point);
        callManager.addCall(await call);
    }
}
