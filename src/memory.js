export default class Memory {
  constructor(global) {
    this._global = global;
    this._name = 'Memory';
  }
  get usedJSHeapSize() {
    return this._global.performance.memory.usedJSHeapSize;
  }
}
