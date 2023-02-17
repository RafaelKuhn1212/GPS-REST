import { MongoClient } from "mongodb";

export default function connect() {

    try {
        const client = new MongoClient(process.env.CONNECT_STRING as string);
        const database = client.db("GPS");
        return database;
    } catch (error) {
        return new Error("Error connecting to database");   
    }
    
}