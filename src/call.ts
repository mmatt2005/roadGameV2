import { AI_Call } from "@/components/actions/createCall.js"
import { POINT_SIZE } from "./constants.js"
import { context, events } from "./main.js"
import { Events } from "./events.js"
import { uuidv4 } from "./utils.js"



export class Call {
    x: number = 0
    y: number = 0

    title: string = ""
    description: string = ""
    emoji: string = "😀"
    id: string = uuidv4()

    /**
     * @description sets the call title, description and emoji all in this one function call
     *
     * @param {AI_Call} aiCall 
     */
    setDetails(aiCall: AI_Call) {
        this.title = aiCall.call_title
        this.description = aiCall.call_description
        this.emoji = aiCall.call_emoji
        events.updateCallsUi()
    }

    setTitle(newTitle: string) {
        this.title = newTitle
        events.updateCallsUi()
    }

    setDescription(newDescription: string) {
        this.description = newDescription
        console.log("Updated call desc")
        events.updateCallsUi()
    }

    setEmoji(newEmoji: string) {
        this.emoji = newEmoji

        events.updateCallsUi()
    }

    setPosition(x: number, y: number) {
        this.x = x
        this.y = y

        events.updateCallsUi()
    }

    draw() {
        context.fillStyle = "white"
        context.fillRect(this.x, this.y, POINT_SIZE, POINT_SIZE)


        context.font = `${POINT_SIZE}px serif`
        context.fillText(this.emoji, this.x - 5, this.y + POINT_SIZE - 5, POINT_SIZE + 10)
    }

}