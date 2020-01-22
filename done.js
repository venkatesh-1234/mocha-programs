var assert = require('assert');
var multi= require ('./multiply.js');

describe('MATH',function(){
    describe ('first',function()
{
    it('multiply',function(done)
    {
            assert.equal(multi(3,4,10),120); 
            setTimeout(done, 300);
    })
})
    it('multiply', function(){
        assert.equal((3*3),9);
    })
        it('subtraction',function(){
            assert.equal(8,(9-1));
    })
    it('adding',function(){
        assert.equal(10,(8+2));
    })
    it('divide',function(){
        assert.equal(10 ,(40/4))
    })       
})
  

