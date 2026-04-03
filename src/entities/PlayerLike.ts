import Phaser from "phaser";
import Entity from "./Entity";

const smoothingFactor = 0.1; // smoothing factor (0–1)
const startingSize = 10;

export default class PlayerLike extends Entity {
  targetX;
  targetY;

  constructor(x: number, y: number, color: number) {
    super(x, y, startingSize, color);
    this.targetX = x;
    this.targetY = y;
  }

  increaseScore(n: number) {
    this.size += n;
    // update sth
  }

  override update() {
    this.x = Phaser.Math.Linear(this.x, this.targetX, smoothingFactor);
    this.y = Phaser.Math.Linear(this.y, this.targetY, smoothingFactor);
  }

  setTarget(x: number, y: number) {
    this.targetX = x;
    this.targetY = y;
  }
}
