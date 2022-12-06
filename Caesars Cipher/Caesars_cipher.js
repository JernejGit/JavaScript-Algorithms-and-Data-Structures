//each character has a coresponding converted character
//A =>N
//N =>A
//B=>O
//O =>B
//C =>P
//P => C

const CHARACTER_CHART = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M'
  }
  
  function rot13(str) {
  //start building an empty string
  let convertedString = "";
  
  // loop trough the input strings character 
  for(let i = 0; i<str.length; i++) {
    const character = str[i];
    let convertedCharacter = "";
      //if the character is a letter, convert it
      if(/[a-z]/i.test(character)) {
        convertedCharacter = CHARACTER_CHART[character];
      }
      //if its not, leave it as is
      else {
      convertedCharacter = character;
      } 
      //console.log(`${character} converts to ${convertedCharacter}`)
       //add the converted/not converted character to the result string
    convertedString += convertedCharacter
  }
    //return result string
    return convertedString;
  }
  
  const result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");
  console.log(result);