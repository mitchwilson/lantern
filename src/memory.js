export default class Memory {
  constructor() {
    this._name = 'Memory';
  }
  get size() {
    return window.performance.memory.usedJSHeapSize;
  }
}
