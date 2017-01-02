export default class Dom {
  constructor(global) {
    this._global = global;
    this._name = 'Dom';
  }
  textNodes(context) {
    console.log('AAAAA');
    let xpathResult = this._global.document.evaluate(
      '//*/text()', context, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    let results;
    let next = xpathResult.iterateNext();

    console.log('BBBBB');

    while (next) {
      console.log('CCCCC');
      results.push(next.nodeValue);
      next = xpathResult.iterateNext();
    }
    console.log('EEEEE');
    return results;
  }
}
