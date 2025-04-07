import { Call } from "./call.js";
import { events, lineManager } from "./main.js";
import { Coordinate } from "./point.js";
import createCall from "@/components/actions/createCall"
export class CallManager {
    calls: Call[] = []

    addCall(newCall: Call) {
        this.calls.push(newCall)
        events.updateCallsUi()
    }

    /**
     * 4/5/25 12:33pm
     * @description creates a random call. Does not add it to the calls array. use addCall() to do that. Default call position is a random point on a line
     * 
     *      
     * @param {Coordinate} [position=lineManager.selectRandomPointOnLine()] point of where the call is at
     * @returns {Call} 
     */
    async createNewCall(position: Coordinate = lineManager.selectRandomPointOnLine()): Promise<Call> { 
        const newCall = new Call()
        newCall.setPosition(position.x, position.y)

        // const aiCall = await createCall({ems: 1, fire: 1, police: 1}, "")
        // newCall.setDetails(aiCall)

        return newCall
    }


    draw() {
        this.calls.forEach(call => call.draw())
    }
}