import GameMenager from "../core/GameMenager";
import PlayerLike from "./PlayerLike";
import { windowHalfHeight, windowHalfWidth } from "../lib/consts";
import { randColor } from "../lib/util";
import UI from "../core/UI";

export default class Player extends PlayerLike {
  constructor() {
    super(windowHalfWidth, windowHalfHeight, randColor());
    addEventListener(`mousemove`, this.onMouseMove);
  }

  override increaseScore(n: number) {
    super.increaseScore(n);
    UI.scoreText.setText(`score: ${this.size}`);
    // update score text
  }

  onMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (!GameMenager.isPlaying) return;
    this.setTarget(clientX, clientY);
    // GameMenager.graphics.clear();
  };
}
