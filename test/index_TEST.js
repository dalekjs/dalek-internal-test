'use strict';

var expect = require('chai').expect;
var test = require('../index.js');

describe('dalek-internal-test', function() {

  it('should exist', function() {
    var testInst = test();
    expect(testInst).to.be.ok;
  });

});
