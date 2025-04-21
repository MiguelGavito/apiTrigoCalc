import { Router } from 'express';
import AreaCircleHandler from "../handlers/areaCircleHandler";

const router = Router();
const handler = new AreaCircleHandler();

router.get("/areaCircle", handler.getAreaCircle.bind(handler));

export default router;