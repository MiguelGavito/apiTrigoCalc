import {Request, Response, NextFunction} from 'express';
import PitagoreanController from "../controllers/pitagoreanController";

const pitagoreanController = new PitagoreanController();

class PitagoreanHandler {
  async getPitagorean(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await pitagoreanController.getPitagorean();
      response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default PitagoreanHandler;