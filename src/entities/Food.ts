import Entity from "./Entity";
import { MAP_HEIGHT, MAP_WIDTH } from "../lib/consts";
import { randColor, randInt } from "../lib/util";

const FOOD_SIZE = 10;

export default class Food extends Entity {
  constructor() {
    super(
      randInt(0, MAP_WIDTH),
      randInt(0, MAP_HEIGHT),
      FOOD_SIZE,
      randColor(),
    );
  }
}
