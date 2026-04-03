import Phaser from "phaser";
import Enemy from "../entities/Enemy";
import GameMap from "../components/GameMap";
import Player from "../entities/Player";
import type PlayerLike from "../entities/PlayerLike";

export default class GameMenager {
  static scene: Phaser.Scene;
  static graphics: Phaser.GameObjects.Graphics;
  static map: GameMap;
  static players: Phaser.GameObjects.Group;
  static playersList: PlayerLike[];
  static food: Phaser.GameObjects.Group;
  static player: Player;

  static isPlaying = false;

  static create(scene: Phaser.Scene) {
    GameMenager.scene = scene;
    GameMenager.graphics = scene.add.graphics();
    GameMenager.map = new GameMap();
    GameMenager.players = GameMenager.scene.add.group();
    const player = new Player();
    GameMenager.player = player;
    GameMenager.playersList = [player];
    GameMenager.players.add(player);
    GameMenager.food = GameMenager.scene.add.group();

    GameMenager.isPlaying = true;

    // Collisions
    GameMenager.scene.physics.add.collider(
      GameMenager.players,
      GameMenager.food,
      (player, food) => {
        // @ts-ignore
        player.increaseScore(1);
        food.destroy();
      },
    );
  }

  static createEnemy() {
    const enemy = new Enemy();
    GameMenager.players.add(enemy);
    GameMenager.playersList.push(enemy);
  }
}
