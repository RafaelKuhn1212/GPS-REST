import { Request, Response } from 'express';
import findAll from '../database/findAll';
import Icoord from '../entities/coords';

export default async function listByProximityController(req: Request<[],[],Icoord>, res: Response) {

findAll().then((result) => {

if(result instanceof Error) throw result
const results = result.filter((poi) => {
if(Math.abs(poi.X - req.body.X) <= req.body.Dmax && Math.abs(poi.Y - req.body.Y) <= req.body.Dmax){

    return true
}else{
    return false
}

})
console.log(results)
res.status(200).send(results);

}).catch((error) => {
    res.status(400).send(error.message);
});
    
}
