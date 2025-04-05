import { AI_Call } from "@/components/actions/createCall.js"
import { POINT_SIZE } from "./constants.js"
import { context } from "./main.js"



export class Call {
    x: number = 0
    y: number = 0

    title: string = ""
    description: string = ""
    emoji: string = "😀"


    /**
     * @description sets the call title, description and emoji all in this one function call
     *
     * @param {AI_Call} aiCall 
     */
    setDetails(aiCall: AI_Call) {
        this.title = aiCall.call_title
        this.description = aiCall.call_description
        this.emoji = aiCall.call_emoji
    }

    setTitle(newTitle: string) {
        this.title = newTitle
    }

    setDescription(newDescription: string) {
        this.description = newDescription
    }

    setEmoji(newEmoji: string) {
        this.emoji = newEmoji
    }

    setPosition(x: number, y: number) {
        this.x = x
        this.y = y
    }

    draw() {
        context.fillStyle = "white"
        context.fillRect(this.x, this.y, POINT_SIZE, POINT_SIZE)


        context.font = `${POINT_SIZE}px serif`
        context.fillText(this.emoji, this.x - 5, this.y + POINT_SIZE - 5, POINT_SIZE + 10)
    }
}