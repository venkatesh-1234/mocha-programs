
describe('getting values', function(){
  it('adding', function(){
    var a=10;
    var b=30;
    var say=a+b;
    console.log(say);
  })
 it('hi',function (){
  setTimeout( function(){
    var a="venkatesh";
    var b="chandu";
    console.log(a+b);
  }, 5000);
 });
 it('calling',function(one){
  setImmediate(one);
 })
});