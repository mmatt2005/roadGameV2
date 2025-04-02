import { createMap } from './createMap'
import { Game } from './game'
import { LineManager } from './lineManager'
import { Player } from './player'
import { PointManager } from './pointManager'
import './style.css'

export const canvas = document.querySelector("canvas")!
export const context = canvas.getContext("2d")!
canvas.width = window.innerWidth
canvas.height = window.innerHeight

export const player = new Player()
export const pointManager = new PointManager()
export const lineManager = new LineManager()

createMap(pointManager.points)

export const game = new Game()
game.loop()



