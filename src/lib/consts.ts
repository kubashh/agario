export const MAP_WIDTH = 2000;
export const MAP_HEIGHT = 1800;

export let windowHalfWidth = window.innerWidth >> 1;
export let windowHalfHeight = window.innerHeight >> 1;

window.addEventListener(`resize`, () => {
  windowHalfWidth = window.innerWidth >> 1;
  windowHalfHeight = window.innerHeight >> 1;
});
