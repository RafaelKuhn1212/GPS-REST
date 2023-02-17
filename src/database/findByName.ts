import connect from "./connect";
import { Db } from "mongodb";
import Ipoi from "../entities/Ipoi";

export default async function findByName(name:string) {
    try {

        const database = connect() as Db;
        const locations = database.collection<Ipoi>("locations");
        const result = await locations.findOne({ name: name });

        return result;

    } catch (error) {
        return new Error("Error finding Pos");
    }

}