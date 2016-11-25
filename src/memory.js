export default class Memory {
  constructor() {
    this._name = 'Memory';
  }
  get usedJSHeapSize() {
    return window.performance.memory.usedJSHeapSize;
  }
}
