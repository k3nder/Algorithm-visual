import {Injectable} from '@angular/core';
import {convertToBar,  forNum, randomIntArrayInRange} from "../ts/utils";
import {Bar, Algorithm} from "../ts/algorithm";
import Bubble from "../ts/algorithms/bubble";



@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {
  min: number = 3;
  max: number = 100;
  velocity: number = 100;
  list: Bar[] = []
  execute(Algorithm: Algorithm, final: Function) {
    console.log('vel: ' + this.velocity);
    Algorithm.list = this.list;
    Algorithm.velocity = this.velocity;
    console.log(Algorithm.steps);
      forNum(this.list.length, (i: number) => {
        console.log(i);
        Algorithm.step(i);
      }, this.velocity, () => {
        console.log("stepss: " + Algorithm.steps);
        if(Algorithm.steps == 0) final();
        return Algorithm.steps > 0;
      }, () => {
        console.log("stepssr: " + Algorithm.steps);
        Algorithm.reset();
      });
      console.log("steps: " + Algorithm.steps);
  }

  generate(nums: number) {
    this.list = convertToBar(randomIntArrayInRange(this.min, this.max, nums));
  }
  constructor() {
    this.generate(30);
  }
}

