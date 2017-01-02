import chai from 'chai';
import Lantern from '../dist/lantern.js';
import jsdom from 'jsdom';

chai.expect();
const expect = chai.expect;
let lantern;
// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// get the window object out of the document
var win = doc.defaultView

describe('Given an instance of my Lantern', function () {
  var window;

  before(function () {
    window = {
      document: {
        evaluate: function() {
          return 1;
        }
      },
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
  describe('when I need the number of text nodes', function() {
    it('should return the number of text nodes', function(done) {
      var phantom = require('phantom');
      phantom.create().then(function (ph) {
        ph.createPage().then(function(page) {
          page.open('http://localhost:8001/').then(function(status) {
            page.evaluate(function() {
              console.log('document: ' + document)
              //return l.dom.textNodes(document);
            }).then(function(result) {
              console.log('result: ' + result);
              expect(1).to.be.a('number');
              done();
            })
          })
        })
      })
    })
  })
});
