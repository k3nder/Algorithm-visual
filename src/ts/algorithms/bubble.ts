import {Algorithm, Bar} from "../algorithm";
class Bubble implements Algorithm {
  public steps: number = 1;
  public velocity : number = 100;
  list: Bar[] = [];
  reset() {
    this.steps = 0;
  }
  step(index: number) {
    console.log({index});
    if(this.list[index +1] == null) return;
    this.list[index].active = true;
    this.list[index + 1].active = true;
    setTimeout(() => {
      this
        .list
        [index]
        .active = false;
      this
        .list
        [index + 1]
        .active = false;
      console.log("inactivate: " + {index})
    }, this.velocity);
    let primary = this.list[index];
    let secondary = this.list[index + 1];
    if (this.isMajor(primary.value, secondary.value)) {
      console.log("change")
      this.list[index] = secondary;
      this.list[index + 1] = primary;
      this.steps++;
    }
  }
  isMajor(n1: number, n2: number): boolean {
    return n1 > n2;
  }
}
export default Bubble;
