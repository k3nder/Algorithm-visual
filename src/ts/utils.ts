import {Bar} from "./algorithm";

export function randomIntArrayInRange (min: number, max: number, n = 1): number[] {
  return Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}
export function convertToBar(list: number[]): Bar[] {
  return list.map(item => {
    let bar: Bar = {
      value: item, active: false
    }
    return bar;
  })
}
export function forEach(list: number[], fn: Function, delay: number) {
  let counter: number = 0;
  const length = list.length;
  for (let j = 0; j < length; j++) {
    setTimeout(() => fn(list[j]), ++counter*delay);
  }
}
export function forWhile(bool: boolean, fn: Function, delay: number) {
  let counter: number = 0;
  while (bool) {
    setTimeout(() => fn(), ++counter*delay);
  }
}
export function forNum(num: number, fn: Function, delay: number, repeat: Function, afterRepeat: Function) {
  let counter: number = 0;
  for (let j = 0; j < num; j++) {
    setTimeout(() => fn(j), ++counter*delay);
  }
  setTimeout(() => {if(repeat() == true) { afterRepeat(); forNum(num, fn, delay, repeat, afterRepeat); }}, ++counter*delay);
}
