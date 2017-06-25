const assert = require('chai').assert;
const sum =require('../fibo').sum;

describe('Fibo',function(){

     it('fibo should return sum',function(){
             var result = sum(30)
         assert.equal(result,1089154);

             })
     it('fibo should return type number',function(){
              var result = sum(10)
         assert.typeOf(result,'number');
         
             })
    it('fibo should return sum above 0',function(){
             var result = sum(5);
         assert.isAbove(result,0);
         
             }) 
    // test case should fail         
    it('fibo should return sum above 100 (test case should fail)',function(){
         var result = sum(11);    
         assert.isAbove(result,100);
         
             })                 
});
