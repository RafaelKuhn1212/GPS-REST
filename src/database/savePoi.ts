import { Db } from "mongodb";
import Ipoi from "../entities/Ipoi";
import connect from "./connect";
import findByName from "./findByName";

export default function savePos(POI: Ipoi) {
    try {
        let find = findByName(POI.name);
        if(find instanceof Error){
            return new Error("Error finding Pos");
        }
                
        const database = connect() as Db;
        const locations = database.collection("locations");
        const result = locations.insertOne({
            name: POI.name,
            X: POI.X,
            Y: POI.Y
        });

        return result;
    } catch (error) {
        return new Error("Error Saving Pos");
    }

}