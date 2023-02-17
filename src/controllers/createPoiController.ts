import { Request, Response } from "express";
import Ipoi from "../entities/Ipoi";
import savePos from "../database/savePoi";
import findByName from "../database/findByName";

export default async function create(req: Request<[], [], Ipoi>, res: Response,) {

    try {

        const find = await findByName(req.body.name)
        if(find instanceof Error) throw find.message
        if(find !== null) throw new Error("Pos already exists")
        
        const result = savePos(req.body)
        if(result instanceof Error) throw result.message


        res.status(200).send("Pos Saved");

    } catch (err) {
        const error = err as Error
        res.status(400).send(error.message)
    }

}