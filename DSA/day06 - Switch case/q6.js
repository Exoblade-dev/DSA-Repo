// check if the char is vowel or consonant 

function checkChar(ch) {

  //i used this line from chat gpt because 2 test cases weren't passing but once i undestood this line it made complete sense how good devs tackle runtime error
  
  if (!ch || ch.length !== 1 || !/[a-zA-Z]/.test(ch)){
    return "Invalid input";
  }

  switch(ch){
    case "a":
    case "A":
    case "e":
    case "E":
    case "i":
    case "I":
    case "o":
    case "O":
    case "u":
    case "U":{
      return "Vowel";
    }
    default:{
      return "Consonant";
    }
  }
}

module.exports = { checkChar };
