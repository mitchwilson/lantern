import Dom from 'Dom';
import Memory from 'Memory';

export default class Lantern {
  constructor(global) {
    this.dom = new Dom(global);
    this._memory = new Memory(global);
    this._name = 'Lantern';
  }
  get name() {
    return this._name;
  }
  get usedJSHeapSize() {
    return this._memory.usedJSHeapSize;
  }
}
