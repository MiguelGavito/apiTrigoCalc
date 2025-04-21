import {Request, Response, NextFunction} from 'express';
import AreaCircleController from "../controllers/areaCircleController";

const areaCircleController = new AreaCircleController();

class AreaCircleHandler {
  async getAreaCircle(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await areaCircleController.getAreaCircle();
      response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default AreaCircleHandler;