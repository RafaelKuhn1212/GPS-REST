import create from "./createPoiController";
import listAll from "./findAllController";
import listByProximityController from "./listByProximityController";

export default {
    FindAll: listAll,
    listByProximity: listByProximityController,
    createPoi: create
}