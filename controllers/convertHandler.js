/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var numericInput =  input.match(/\d[\/\d.]*|\d/);
    console.log('numericInput :'+numericInput);
    //https://stackoverflow.com/questions/21443364/regex-to-match-integers-decimals-and-fractions
    
  //if input has ONLY numercal values and Math operators
    var RegEx = RegExp('[a-z]','ig');
    var isNonNumericInput = RegEx.test(input);
    
    if(isNonNumericInput){
      var numberOfUnits =  input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/g).length;
    }
    
    
    console.log("nonNumericInput:" + isNonNumericInput)
    console.log("numberOfUnits:" + numberOfUnits);
    if( numberOfUnits == 1 ){
      input.replace(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/g);
      result= numericInput;
    }else{
      result = isNonNumericInput;
    }
    
   
    //else "error"
    
       // var result =  input.match(/\d+[\/\d.]*|\d/);
    //input.match(/\d+\.?\d+\/?\d+\.?\d+/); my effort   
    console.log("converthandler result:" + result);
     return result;
  };
  
  this.getUnit = function(input) {
    var result;
    console.log("input unit:"+input)
    var count = input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/g).length;
    console.log("count :"+count);
    
    if( count == 1){
      result = input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/g);
    }
    console.log("unit is: " +result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
