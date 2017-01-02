export default class Memory {
  constructor(global) {
    this._global = global;
    this._name = 'Memory';

    if (!('performance' in this._global)) {
      this._global.performance = {
        memory: {
          usedJSHeapSize: 0
        }
      };
    }
  }

  get usedJSHeapSize() {
    return this._global.performance.memory.usedJSHeapSize;
  }
}
