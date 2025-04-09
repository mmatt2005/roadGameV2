import { CallManager } from './callManager.js'
import { UI_WIDTH } from './constants.js'
import { createMap } from './createMap.js'
import { Debug } from './debug.js'
import { Events } from './events.js'
import { Game } from './game.js'
import { LineManager } from './lineManager.js'
import { PointManager } from './pointManager.js'
import { VehicleManager } from './vehicleManager.js'

export const canvas = document.querySelector("canvas")!
console.log(canvas)
export const context = canvas.getContext("2d")!
canvas.width = window.innerWidth - UI_WIDTH
canvas.height = window.innerHeight

export const pointManager = new PointManager()
export const lineManager = new LineManager()
createMap(pointManager.points)

export const events = new Events()
export const callManager = new CallManager()
export const vehicleManager = new VehicleManager()
vehicleManager.spawnDefaultVehicles()

export let game = new Game()
game.loop()

export let debug = new Debug()










