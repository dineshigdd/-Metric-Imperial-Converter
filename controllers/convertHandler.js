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
    var RegEx = RegExp('\/\/','g');
    var isDoublefraction = RegEx.test(input);
    
    console.log("input in query string:"+input);
    console.log('isDoublefraction :'+isDoublefraction);
    //https://stackoverflow.com/questions/21443364/regex-to-match-integers-decimals-and-fractions
    
  //if input has ONLY numercal values and Math operators  
    
    
     var numberOfUnits =  input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig).length;  
    
   
    console.log("numberOfUnits:" + numberOfUnits);
    if( numberOfUnits == 1 ){
      var alteredInput = input.replace(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig,0);
      
      RegEx = RegExp('[a-z]','ig');
      var isNonNumericInput = RegEx.test(alteredInput);
      console.log("nonNumericInput:" + isNonNumericInput);
      
      if(!isNonNumericInput)
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
    var count = input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig).length;
    console.log("count :"+count);
    
    if( count == 1 ){
      result = input.match(/(km)|(mi)|(gal)|(l)|(lbs)|(kg)/ig);
    }
    
    console.log("unit is: " +result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'km':result = 'mi';
        break;
      case 'kg':result = 'lbs';
        break;
      case 'l':result = 'gal';
        break;
      case 'mi':result = 'km';
        break;
      case 'lbs':result = 'kg';
        break;
      case 'gal': result = 'l';
        break;
    }
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
