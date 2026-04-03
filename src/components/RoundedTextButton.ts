import Phaser from "phaser";

export default class RoundedTextButton extends Phaser.GameObjects.Container {
  text;
  bg;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    label: string,
    {
      fontSize,
      color,
      bgColor,
      padding = [20, 10],
      radius,
      onClick,
    }: RoundedTextButtonOptions,
  ) {
    super(scene, x, y);

    this.scene = scene;

    const [paddingX, paddingY] = padding;

    // Text
    this.text = scene.add
      .text(0, 0, label, {
        color: color,
        fontSize,
      })
      .setOrigin(0.5);

    // Background
    this.bg = scene.add.graphics();
    this.bg.fillStyle(bgColor, 1);
    this.bg.fillRoundedRect(
      -this.text.width * 0.5 - paddingX,
      -this.text.height * 0.5 - paddingY,
      this.text.width + paddingX * 2,
      this.text.height + paddingY * 2,
      radius,
    );

    // Add children
    this.add([this.bg, this.text]);

    // Set size for input
    this.setSize(
      this.text.width + paddingX * 2,
      this.text.height + paddingY * 2,
    );

    this.setInteractive({ useHandCursor: true });

    // Events
    if (onClick) this.on(`pointerdown`, onClick);

    this.on(`pointerover`, () => this.bg.setAlpha(0.8));
    this.on(`pointerout`, () => this.bg.setAlpha(1));

    // Add to scene
    scene.add.existing(this);
  }
}

type RoundedTextButtonOptions = {
  fontSize: number;
  color: string;
  bgColor: number;
  padding?: [number, number];
  radius?: number;
  onClick?: () => void;
};
