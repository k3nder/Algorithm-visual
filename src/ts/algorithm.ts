import {AlgorithmsService} from "../app/algorithms.service";
import Bubble from "./algorithms/bubble";


export interface Algorithm {
  velocity: number
  steps: number,
  list: Bar[];
  reset(): void;
  step(index: number): void;
  isMajor(n1: number, n2: number): boolean;
}

export interface Bar {
  value: number,
  active: boolean;
}
const bubble = new Bubble();
export const Algorithms = {
  Bubble: bubble,
}

