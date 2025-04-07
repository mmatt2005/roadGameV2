import EventEmitter from "eventemitter3";
import { callManager, vehicleManager } from "./main";
export class Events extends EventEmitter {
    updateCallsUi() {
        const currentCalls = callManager.calls;
        this.emit("updateUi_calls", currentCalls);
    }
    updateVehiclesUi() {
        const currentVehicles = vehicleManager.vehicles;
        this.emit("updateUi_vehicles", currentVehicles);
    }
    updateUi(newUiState) {
        this.emit("updateUi", newUiState);
    }
}
