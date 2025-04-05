import { Call } from './call.js'
import { CallManager } from './callManager.js'
import { UI_WIDTH } from './constants.js'
import { createMap } from './createMap.js'
import { Debug } from './debug.js'
import { Game } from './game.js'
import { LineManager } from './lineManager.js'
import { PointManager } from './pointManager.js'
import { UiManager } from './uiManager.js'
import { VehicleManager } from './vehicleManager.js'

export const canvas = document.querySelector("canvas")!
export const context = canvas.getContext("2d")!
canvas.width = window.innerWidth - UI_WIDTH
canvas.height = window.innerHeight


export const pointManager = new PointManager()
export const lineManager = new LineManager()

createMap(pointManager.points)

export const vehicleManager = new VehicleManager()
export const callManager = new CallManager()

export const game = new Game()
game.loop()

const call = new Call()
const { x, y } = callManager.createCallLocation()
call.setPosition(x, y)


callManager.addCall(call)

export const uiManager = new UiManager()

export const debug = new Debug()
