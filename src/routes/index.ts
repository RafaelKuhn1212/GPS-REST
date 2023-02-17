import express from 'express';
//Import All controllers
import controllers from '../controllers/index'
//Import Middlewares
import verifyBody from "../middlewares/verifyBody";
import COORDschema from '../schemas/coordSchema';
import POIschema from "../schemas/poiSchema";

const router = express.Router();

router.post('/insert',verifyBody(POIschema),controllers.createPoi)
router.get('/listAll', controllers.FindAll)
router.get('/listByProximity',verifyBody(COORDschema),controllers.listByProximity)
export default router;