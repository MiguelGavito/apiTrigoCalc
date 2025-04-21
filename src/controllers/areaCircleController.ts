import AreaCircleDB from "../db/areaCircleDB";
import { CircleDB } from "../types/Circle";

const areaCircleDBInstance = new AreaCircleDB();
const PI = Math.PI;

class AreaCircleController {
  async getAreaCircle(): Promise<CircleDB["radius"]> {
    const data = await areaCircleDBInstance.getData();
    const radius = data.radius; //checar luego

    const area = PI * Math.pow(radius, 2);
    return area;
  }
}

export default AreaCircleController;