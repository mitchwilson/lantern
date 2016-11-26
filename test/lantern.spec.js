import chai from 'chai';
import Lantern from '../dist/lantern.js';

chai.expect();

const expect = chai.expect;

let lantern;

describe('Given an instance of my Lantern', function () {
  before(function () {
    lantern = new Lantern();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lantern.name).to.be.equal('Lantern');
    });
  });
});
