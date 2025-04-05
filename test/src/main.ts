import { Call } from './call'
import { CallManager } from './callManager'
import { createMap } from './createMap'
import { Debug } from './debug'
import { Game } from './game'
import { LineManager } from './lineManager'
import { Player } from './player'
import { PointManager } from './pointManager'
import { VehicleManager } from './vehicleManager'

export const canvas = document.querySelector("canvas")!
console.log(document)
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
