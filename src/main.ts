import { Call } from './call.js'
import { CallManager } from './callManager.js'
import { createMap } from './createMap.js'
import { Debug } from './debug.js'
import { Game } from './game.js'
import { LineManager } from './lineManager.js'
import { Player } from './player.js'
import { PointManager } from './pointManager.js'
import { VehicleManager } from './vehicleManager.js'

export const canvas = document.querySelector("canvas")!
export const context = canvas.getContext("2d")!
canvas.width = window.innerWidth
canvas.height = window.innerHeight

export const player = new Player()
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




export const debug = new Debug()
