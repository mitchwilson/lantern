export default class Memory {
  constructor() {
    this._name = 'Memory';
  }
  get size() {
    return this.performance.memory.usedJSHeapSize;
  }
}
