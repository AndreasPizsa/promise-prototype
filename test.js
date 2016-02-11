/**
 * Created by developer on 2/11/16.
 */

const should = require('should');

describe('promise-prototype', function(){

  it('can get the prototype of the native Promise class', function(){
    require('.')();
  });

  function testPromiseLib(PromiseLib){
    const promisePrototype = require('.')(PromiseLib);

    it("can get the prototype of the Promise class", function(){
      (typeof promisePrototype).should.equal('object');
    });

    it("can extend the prototype of the Promise class", function(done){
      promisePrototype.whatever = function(fn) {
        return this.then(fn,fn);
      };

      PromiseLib.resolve(false).whatever(done);
    });
  }

  function testWith(libName)
  {
    describe(
      libName || 'native',
      testPromiseLib.bind(this,libName ? require(libName) : Promise)
    );
  }

  testWith();
  testWith('bluebird');
  testWith('q');
  testWith('rsvp');
});
