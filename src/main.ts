import { CallManager } from './callManager.js'
import { UI_WIDTH } from './constants.js'
import { createMap } from './createMap.js'
import { Debug } from './debug.js'
import { Events } from './events.js'
import { Game } from './game.js'
import { Line } from './line.js'
import { LineManager } from './lineManager.js'
import { Point } from './point.js'
import { PointManager } from './pointManager.js'
import { VehicleManager } from './vehicleManager.js'

export let canvas: HTMLCanvasElement
export let context: CanvasRenderingContext2D

export let pointManager: PointManager
export let lineManager: LineManager
export let events: Events
export let callManager: CallManager
export let vehicleManager: VehicleManager
export let game: Game
export let debug: Debug

// Filler commit 4/8/25

export function setCanvas() { 
    canvas = document.querySelector("canvas")!
    context = canvas.getContext("2d")!
    canvas.width = window.innerWidth - UI_WIDTH
    canvas.height = window.innerHeight

    pointManager = new PointManager()
    createMap(pointManager.points)

    lineManager = new LineManager()
    events = new Events()

    callManager = new CallManager()
    vehicleManager = new VehicleManager()
    vehicleManager.spawnDefaultVehicles()
    game = new Game()

    game.loop()

    debug = new Debug()
}


