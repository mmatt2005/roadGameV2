import EventEmitter from "eventemitter3";
import { callManager, vehicleManager } from "./main";
import { Call } from "./call";
import { Vehicle } from "./vehicle";
import { Point } from "./point";

export interface UiState {
    state: "call" | "vehicle" | "point" | "default"
    selectedObject: Call | Vehicle | Point | "default"
}
export class Events extends EventEmitter {
    updateCallsUi() { 
        const currentCalls = callManager.calls
        this.emit("updateUi_calls", currentCalls)
    }

    updateVehiclesUi() { 
        const currentVehicles = vehicleManager.vehicles
        this.emit("updateUi_vehicles", currentVehicles)
    }

    updateUi(newUiState: UiState) { 
        this.emit("updateUi", newUiState)
    }
}