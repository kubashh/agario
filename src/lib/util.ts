export function randColor() {
  return randInt(0, 0xffffff);
}

export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
