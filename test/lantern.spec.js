import chai from 'chai';
import Lantern from '../dist/lantern.js';

chai.expect();

const expect = chai.expect;

let lantern;

describe('Given an instance of my Lantern', function () {
  before(function () {
    let window = {
      performance: {
        memory: {
          usedJSHeapSize: 1000000
        }
      }
    }
    lantern = new Lantern(window);
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lantern.name).to.be.equal('Lantern');
    });
  });
  describe('when I need the size', function () {
    it('should return the size', () => {
      expect(lantern.usedJSHeapSize).to.be.a('number');
    });
  });
});
