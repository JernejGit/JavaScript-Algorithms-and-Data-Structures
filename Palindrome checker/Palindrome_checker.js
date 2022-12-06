function cleanUpNonAlpha(str){
    return str.replace(/[\W_]/g, "");
  }
  function makeUppercase(str) {
    return str.toUpperCase();
  }
  function flipStr(str) {
    //take an empty string
  let result = "";
    //start a loop at the end of the input string
     //put a letter at the current stage at the end of the result string
    for (let i=str.length-1; i>=0; i--) {
      result += str[i];
    }
   //return result string
   return result;
  
  }
  
  
  function palindrome(str) {
    //Clean up string by removing non alphanumeric char.
    const cleanedUpStr = cleanUpNonAlpha(str);
  
    //Make cleaned up string uppercase
    const uppercaseStr = makeUppercase(cleanedUpStr);
  
    //Reverse uppercase cleaned up string
    const reversedStr = flipStr(uppercaseStr);
     
  
    //Compare reversed and uppercasse string
    //if they are the same its a palindrome (return true)
    console.log(`Is ${uppercaseStr} the same as ${reversedStr}?`)
    return reversedStr === uppercaseStr;
  }
  
  console.log(palindrome("nope"));
  
  
  //Palindroms
  //1111
  //Bob
  //MoM
  //dad
  //Racecar
  //Anna
  //Hannah
  //Tacocat
  //Madamž
  //Madam
  //Radar
  
  //These are not palindromes
  //12111
  //Javascript
  //Earphones