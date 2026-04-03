import Phaser from "phaser";
import RoundedTextButton from "../components/RoundedTextButton";
import GameMenager from "../core/GameMenager";
import { windowHalfWidth } from "../lib/consts";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super(`MenuScene`);
    GameMenager.isPlaying = false;
  }

  create() {
    // Label
    this.add
      .text(windowHalfWidth, 48, `Menu`, {
        color: `#ffffff`,
        fontSize: 64,
      })
      .setOrigin(0.5, 0);

    // StartGameButton
    const startGameButton = new RoundedTextButton(
      this,
      windowHalfWidth,
      this.scale.height - 92,
      `Start Game`,
      {
        color: `#ffffff`,
        fontSize: 48,
        bgColor: 0xaaaaaa,
        onClick: () => {
          this.scene.start(`MainScene`);
        },
      },
    );

    this.scale.on(`resize`, (gameSize: any) => {
      const { width, height } = gameSize;

      startGameButton.setPosition(width >> 1, height - 92);
    });
  }
}
