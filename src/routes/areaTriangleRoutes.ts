import { Router } from 'express';
import AreaTriangleHandler from "../handlers/areaTriangleHandler";

const router = Router();
const handler = new AreaTriangleHandler();

router.get("/areaTrieangle", handler.getTriangleCircle.bind(handler));

export default router;