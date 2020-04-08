import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ShipsService {
  async find(query={}) {
    let ships = await dbContext.Ships.find(query);
    return ships;
  }
  async findById(id) {
    let ship = await dbContext.Ships.findById(id);
    if (!ship) {
      throw new BadRequest("Invalid Id");
    }
    return ship;
  }
}

export const shipsService = new ShipsService();