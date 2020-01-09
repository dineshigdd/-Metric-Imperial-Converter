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
          
    
    
    console.log("input in query string:"+input);

    //https://stackoverflow.com/questions/21443364/regex-to-match-integers-decimals-and-fractions
    
  //if input has ONLY numercal values and Math operators  
    
    try{
        var numberOfUnits =  input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig).length;     
   
   
        console.log("numberOfUnits:" + numberOfUnits);


          if( numberOfUnits == 1 ){
            var alteredInput = input.replace(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig,0);

            var RegEx = RegExp('[a-z]','ig');
            var isNonNumericInput = RegEx.test(alteredInput);
            //console.log("nonNumericInput:" + isNonNumericInput);

            if(!isNonNumericInput)
                var numericInput =  input.match(/\d[\/\d.]*|\d/);
            
                if( numericInput != null ){
                      result = numericInput;
                }else{
                   result = "invalid number";
                }
          }else{
                result = "invalid number";
          }
      
       
    }catch{
      result = "error";
      console.log("ddd")
    }   
   
    //else "error"
    
       // var result =  input.match(/\d+[\/\d.]*|\d/);
    //input.match(/\d+\.?\d+\/?\d+\.?\d+/); my effort   
   // console.log("converthandler result:" + result);
    return result;
  };
 
  this.getUnit = function(input) {
    var result;
    console.log("inputtttt unit:"+input);  
   
    try{
   
    var count = input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig).length;
   // console.log("count :"+count);
     if( count == 1 ){
        result = input.match(/(km)|(mi)|(gal)|(l)|(lbs)|(kg)/ig);
      }    
    }catch{
       result = 'invalid unit';
    }
    console.log("unit is: " +result);
    return result = result.toString();
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toString().toLowerCase()){
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
    switch(unit.toString().toLowerCase()){
      case 'km':result = 'kilometers';
        break;
      case 'kg':result = 'kilograms';
        break;
      case 'l':result = 'liters';
        break;
      case 'mi':result = 'miles';
        break;
      case 'lbs':result = 'pounds';
        break;
      case 'gal': result = 'gallons';
        break;
   };
     return result;
  }
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toString().toLowerCase()){
      case 'km':result = initNum / miToKm;
        break;
      case 'kg':result = initNum / lbsToKg;
        break;
      case 'l':result = initNum / galToL;
        break;
      case 'mi':result = initNum * miToKm;
        break;
      case 'lbs':result = initNum * lbsToKg;
        break;
      case 'gal': result = initNum * galToL;
        break;
   };
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    if(  (initNum == "invalid number" ||  initNum == "error" ) &&  initUnit == "invalid unit" ){
        result = {"error":"invalid number"+ " and " + initUnit };
      
    }else if( initNum == "invalid number" ){
       result = {"error":initNum };
      
    }else if( initUnit == "invalid unit" || initNum == "error"){
      result = {"error":initUnit };
      
    }else {
      result =     {  
                      'initNum': Number(initNum),
                      'initUnit': initUnit,
                      'returnNum':returnNum,
                      'returnUnit':returnUnit
                   };
    }
    // {"initNum":1,"initUnit":"lbs","returnNum":0.45359,"returnUnit":"kg","string":"1 pounds converts to 0.45359 kilograms"}
    return result;
  };
  
}

module.exports = ConvertHandler;
