import connect from "./connect";
import { Db } from "mongodb";
import Ipoi from "../entities/Ipoi";

export default async function findAll() {
    try {

        const database = connect() as Db;
        const locations = database.collection<Ipoi>("locations");
        const result = locations.find({});

        return result.toArray();

    } catch (error) {
        return new Error("Error on finding pos");
    }

}