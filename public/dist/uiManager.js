import EventEmitter from "eventemitter3";
export class UiManager extends EventEmitter {
    constructor() {
        super(...arguments);
        this.uiState = "default";
    }
    setUiState(newUiState, newObject) {
        this.uiState = newUiState;
        this.emit("uiStateChange", {
            uiState: newUiState,
            object: newObject
        });
    }
}
