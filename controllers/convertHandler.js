/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = null;
          
    
    
    console.log("input in query string:"+input);

    //https://stackoverflow.com/questions/21443364/regex-to-match-integers-decimals-and-fractions
    
  //if input has ONLY numercal values and Math operators  
    
    //try{
        //var numberOfUnits =  input.match(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig).length;     
   
   
       // console.log("numberOfUnits:" + numberOfUnits);

       
          var alteredInput = null;
         //if( numberOfUnits =>1 ){
            alteredInput = input.replace(/(km)|(mi)|(gal)|(L)|(lbs)|(kg)/ig,0);
            console.log("alteredInput:" +alteredInput)
            var RegEx = RegExp('[a-z]','ig');
            var isNonNumericInput;
            var numericInput = null;
    
            if( alteredInput == input ){
              console.log("test input")
               isNonNumericInput = RegEx.test(input);
            }else{
               isNonNumericInput = RegEx.test(alteredInput);
            }
            console.log("nonNumericInput:" + isNonNumericInput);
             numericInput =  input.match(/\d[\/\d.]*|\d/);
             console.log("numeric input:"+numericInput);
    
                if(isNonNumericInput){   //if input has [a-z]                

                      if( numericInput != null ){                          
                             result = numericInput;
                      }else{
                         result = "invalid number";
                      }
                }else{ //if input has only numbers
                   try{
                     var countSlashes = numericInput.toString().match(/\//g).length;
                     
                      if( countSlashes > 1 ){
                           result = "invalid number";
                      }
                        //else{
                         //  result = numericInput;
                      //}
                   }catch{
                      result = numericInput;
                   }
                }
          //      }
      
       
    // }catch{
    //   result = "error";
    //   console.log("ddd")
    // }   
   
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
      default  : result = initNum;
   };
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    if(  initNum == "invalid number"  &&  initUnit == "invalid unit" ){
        result = {error:"invalid number"+ " and " + initUnit };
      
    }else if( initNum == "invalid number" ){
       result =  {  
                      'initNum': Number(initNum),
                      'initUnit': initUnit,
                      'returnNum':returnNum,
                      'returnUnit':returnUnit
                   };
         //{error:initNum };
      
    }else if( initUnit == "invalid unit" ){
      result =  {  
                      'initNum': Number(initNum),
                      'initUnit': initUnit,
                      'returnNum':returnNum,
                      'returnUnit':returnUnit
                   };
        
       // {error:initUnit };
      
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
