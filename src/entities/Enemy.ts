import PlayerLike from "./PlayerLike";
import { randColor, randInt } from "../lib/util";
import { MAP_HEIGHT, MAP_WIDTH } from "../lib/consts";

export default class Enemy extends PlayerLike {
  constructor() {
    super(randInt(0, MAP_WIDTH), randInt(0, MAP_HEIGHT), randColor());
  }
}
