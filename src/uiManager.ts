import EventEmitter from "eventemitter3";
import { Call } from "./call";
import { Point } from "./point";

export type UiState = "default" | "call" | "point"
export type UiStateObject = Call | Point | "default"

export interface NewUiState {
    uiState: UiState,
    object: UiStateObject
}

export class UiManager extends EventEmitter {
    uiState: UiState = "default"

    setUiState(newUiState: UiState, newObject: UiStateObject) {
        this.uiState = newUiState
        this.emit("uiStateChange",
            {
                uiState: newUiState,
                object: newObject
            }
        )
    }
}