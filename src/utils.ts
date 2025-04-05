import { callManager, pointManager } from "./main.js";
import { Point } from "./point.js";

/**
 * 4/5/25 8:58am 
 * @description get the closest interactable game object from where the player clicked on the canvas 
 * @export
 * @param {Pick<Point, "x" | "y">} clickPosition where the player clicked on the canvas
 */
export function getClosestGameObject(clickPosition: Pick<Point, "x" | "y">) {
    const gameObjects = [...pointManager.points, ...callManager.calls]

    const closestObject = gameObjects.sort((objectA, objectB) => {
        const objectADistance = Math.sqrt(Math.pow(clickPosition.x - objectA.x, 2) + Math.pow(clickPosition.y - objectA.y, 2))
        const objectBDistance = Math.sqrt(Math.pow(clickPosition.x - objectB.x, 2) + Math.pow(clickPosition.y - objectB.y, 2))

        if (objectADistance < objectBDistance) return -1
        return 0
    })[0]


    // Check to see if the closestObject is actually close to the click position and not more than 50px away
    const MAX_DISTANCE_FROM_CLICK = 25
    if (
        Math.abs(closestObject.x - clickPosition.x) > MAX_DISTANCE_FROM_CLICK ||
        Math.abs(closestObject.y - clickPosition.y) > MAX_DISTANCE_FROM_CLICK
    ) return null

    return closestObject
}

// Use because we have trouble importing the uuid package and rendering it to the browser for some reason...
export function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  