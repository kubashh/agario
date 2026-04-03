import Phaser from "phaser";
import GameMenager from "../core/GameMenager";

export default class Entity extends Phaser.GameObjects.Arc {
  s;

  constructor(x: number, y: number, radius: number, color: number) {
    super(GameMenager.scene, x, y, radius, 0, 360, false, color);

    // Add to scene
    GameMenager.scene.add.existing(this);

    // Enable physics
    GameMenager.scene.physics.add.existing(this);

    this.s = radius;
  }

  get size() {
    return this.s;
  }

  set size(newSize: number) {
    this.s = newSize;
    // TODO: update collider
  }
}
