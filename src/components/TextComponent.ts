export default class TextComponent extends Phaser.GameObjects.Text {
  private v: string;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    initialValue: string,
    style?: Phaser.Types.GameObjects.Text.TextStyle,
  ) {
    super(scene, x, y, String(initialValue), style || {});

    scene.add.existing(this); // automatically add to scene
    this.v = initialValue;
  }

  // Update the value and the displayed text
  public set value(newValue: string) {
    this.v = newValue;
    this.setText(String(newValue));
  }

  // Get current value
  public get value(): string {
    return this.v;
  }

  // Optional: change color dynamically
  public setColorHex(hexColor: string) {
    this.setColor(hexColor);
  }
}
