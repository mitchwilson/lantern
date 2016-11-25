import Memory from 'Memory';

export default class Lantern {
  constructor() {
    this._memory = new Memory();
    this._name = 'Lantern';
  }
  get name() {
    return this._name;
  }
  get jsHeapSize() {
    return this._memory.size;
  }
}
