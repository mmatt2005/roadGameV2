import EventEmitter from "eventemitter3";
import { Call } from "./call";
import { Point } from "./point";
import { Vehicle } from "./vehicle";

export type UiState = "default" | "call" | "point" | "vehicle"
export type UiStateObject = Call | Point | Vehicle | "default"

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