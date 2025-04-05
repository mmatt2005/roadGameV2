"use client"
import { Call } from "@/public/dist/call"
import { CallManager } from "@/public/dist/callManager"
import { createMap } from "@/public/dist/createMap"
import { Debug } from "@/public/dist/debug"
import { Game } from "@/public/dist/game"
import { LineManager } from "@/public/dist/lineManager"
import {Player} from "@/public/dist/player"
import { PointManager } from "@/public/dist/pointManager"
import { VehicleManager } from "@/public/dist/vehicleManager"

export default function Main() {
     const canvas = document.querySelector("canvas")!
    console.log(document)
     const context = canvas.getContext("2d")!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
     const player = new Player()
     const pointManager = new PointManager()
     const lineManager = new LineManager()
    
    createMap(pointManager.points)
    
     const vehicleManager = new VehicleManager()
     const callManager = new CallManager()
    
     const game = new Game()
    game.loop()
    
    const call = new Call()
    const { x, y } = callManager.createCallLocation()
    call.setPosition(x, y)
    
    callManager.addCall(call)
    
    
    
    
     const debug = new Debug()
    return <></>
}