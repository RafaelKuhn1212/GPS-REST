import { Request, Response } from 'express';
import findAll from '../database/findAll';

export default async function listAll(req: Request, res: Response) {
try {
    const result = await findAll();

    if (result instanceof Error) throw result
    res.status(200).send(result);
} catch (error) {
    res.status(400).send(error.message);
}


}