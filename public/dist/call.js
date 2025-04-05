import { POINT_SIZE } from "./constants.js";
import { context } from "./main.js";
export class Call {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.title = "";
        this.description = "";
        this.emoji = "😀";
    }
    /**
     * @description sets the call title, description and emoji all in this one function call
     *
     * @param {AI_Call} aiCall
     */
    setDetails(aiCall) {
        this.title = aiCall.call_title;
        this.description = aiCall.call_description;
        this.emoji = aiCall.call_emoji;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    setEmoji(newEmoji) {
        this.emoji = newEmoji;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, POINT_SIZE, POINT_SIZE);
        context.font = `${POINT_SIZE}px serif`;
        context.fillText(this.emoji, this.x - 5, this.y + POINT_SIZE - 5, POINT_SIZE + 10);
    }
}
