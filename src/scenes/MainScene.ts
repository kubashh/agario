import Phaser from "phaser";
import TextComponent from "../components/TextComponent";
import GameMenager from "../core/GameMenager";
import Food from "../entities/Food";
import RoundedTextButton from "../components/RoundedTextButton";
import UI from "../core/UI";

export default class MainScene extends Phaser.Scene {
  static intervalId: NodeJS.Timeout;

  menuButton: RoundedTextButton = null as any;

  constructor() {
    super(`MainScene`);
    GameMenager.scene = this;
    GameMenager.isPlaying = true;
  }

  create() {
    GameMenager.create(this);

    // Spawn food
    if (MainScene.intervalId) {
      clearInterval(MainScene.intervalId);
    }
    MainScene.intervalId = setInterval(() => {
      GameMenager.food.add(new Food());
    }, 350);

    UI.scoreText = new TextComponent(this, 12, 8, `Score: 0`, {
      fontSize: `24px`,
      color: `#ffffff`,
    });

    this.menuButton = new RoundedTextButton(
      this,
      this.scale.width - 42,
      24,
      `Menu`,
      {
        color: `#ffffff`,
        fontSize: 24,
        bgColor: 0xaaaaaa,
        onClick: () => {
          this.scene.start(`MenuScene`); // switch scene
        },
      },
    );
  }

  override update() {
    GameMenager.graphics.clear();

    // for (const entity of GameMenager.playersList) {
    //   entity.update();
    // }

    GameMenager.players.getChildren().forEach(function (child) {
      child.update();
    });
  }
}
