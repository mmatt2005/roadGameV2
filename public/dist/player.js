import { context } from "./main.js";
export class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.listener();
    }
    listener() {
        window.addEventListener("keypress", event => {
            if (event.key === "w") {
                this.y -= 10;
            }
            else if (event.key === "a") {
                this.x -= 10;
            }
            else if (event.key === "s") {
                this.y += 10;
            }
            else if (event.key === "d") {
                this.x += 10;
            }
        });
    }
    draw() {
        context.fillStyle = "white";
        context.fillRect(this.x, this.y, 25, 25);
    }
}
