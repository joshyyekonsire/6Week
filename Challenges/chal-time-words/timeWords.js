


function splitNumber(number) {
  let numArray = number.toString().split("").map(Number);

  let firstHalf = [];
  let secondHalf = [];
  let phrase = "";

  if (numArray.length === 4) {
    firstHalf.push(numArray[0], numArray[1]);
    secondHalf.push(numArray[2], numArray[3]);
    if (firstHalf[0] === 2 && firstHalf[1] === 4) {
      phrase += "twelve";
    }
    if (firstHalf[0] === 2 && firstHalf[1] === 3) {
      phrase += "eleven";
    }
    if (firstHalf[0] === 2 && firstHalf[1] === 2) {
      phrase += "ten";
    }
    if (firstHalf[0] === 2 && firstHalf[1] === 1) {
      phrase += "nine";
    }
    if (firstHalf[0] === 2 && firstHalf[1] === 0) {
      phrase += "eight";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 9) {
      phrase += "seven";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 8) {
      phrase += "six";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 7) {
      phrase += "five";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 6) {
      phrase += "four";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 5) {
      phrase += "three";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 4) {
      phrase += "two";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 3) {
      phrase += "one";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 2) {
      phrase += "twelve";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 1) {
      phrase += "eleven";
    }
    if (firstHalf[0] === 1 && firstHalf[1] === 0) {
      phrase += "ten";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 0) {
      phrase += " 'o' clock";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 1) {
      phrase += " oh one";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 2) {
      phrase += " oh two";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 3) {
      phrase += " oh three";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 4) {
      phrase += " oh four";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 5) {
      phrase += " oh five";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 6) {
      phrase += " oh six";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 7) {
      phrase += " oh seven";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 8) {
      phrase += " oh eight";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 9) {
      phrase += " oh nine";
    }

    if (secondHalf[0] === 1 && secondHalf[1] === 0) {
      phrase += " ten";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 1) {
      phrase += " eleven";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 2) {
      phrase += " twelve";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 3) {
      phrase += " thirteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 4) {
      phrase += " fourteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 5) {
      phrase += "fifteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 6) {
      phrase += " sixteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 7) {
      phrase += " seventeen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 8) {
      phrase += " eighteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 9) {
      phrase += " nineteen";
    }
    if (secondHalf[0] === 2) {
      phrase += " twenty";
    }
    if (secondHalf[0] === 3) {
      phrase += " thirty";
    }
    if (secondHalf[0] === 4) {
      phrase += " fourty";
    }
    if (secondHalf[0] === 5) {
      phrase += " fifty";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 1) {
      phrase += " one";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 2) {
      phrase += " two";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 3) {
      phrase += " three";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 4) {
      phrase += " four";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 5) {
      phrase += " five";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 6) {
      phrase += " six";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 7) {
      phrase += " seven";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 8) {
      phrase += " eight";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 9) {
      phrase += " nine";
    }

    phrase += " PM";

    if (
      firstHalf[0] === 1 &&
      firstHalf[1] === 2 &&
      secondHalf[0] === 0 &&
      secondHalf[1] === 0
    ) {
      phrase = "";
      phrase += "Noon";
    }
    console.log(number + " = " + phrase);
} else if (numArray.length === 3) {
    firstHalf.push(numArray[0]);
    secondHalf.push(numArray[1], numArray[2]);

    if (firstHalf[0] === 1) {
      phrase += "one";
    }
    if (firstHalf[0] === 2) {
      phrase += "two";
    }
    if (firstHalf[0] === 3) {
      phrase += "three";
    }
    if (firstHalf[0] === 4) {
      phrase += "four";
    }
    if (firstHalf[0] === 5) {
      phrase += "five";
    }
    if (firstHalf[0] === 6) {
      phrase += "six";
    }
    if (firstHalf[0] === 7) {
      phrase += "seven";
    }
    if (firstHalf[0] === 8) {
      phrase += "eight";
    }
    if (firstHalf[0] === 9) {
      phrase += "nine";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 0) {
      phrase += " 'o' clock";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 1) {
      phrase += " oh one";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 2) {
      phrase += " oh two";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 3) {
      phrase += " oh three";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 4) {
      phrase += " oh four";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 5) {
      phrase += " oh five";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 6) {
      phrase += " oh six";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 7) {
      phrase += " oh seven";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 8) {
      phrase += " oh eight";
    }
    if (secondHalf[0] === 0 && secondHalf[1] === 9) {
      phrase += " oh nine";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 0) {
      phrase += " ten";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 1) {
      phrase += " eleven";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 2) {
      phrase += " twelve";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 3) {
      phrase += " thirteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 4) {
      phrase += " fourteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 5) {
      phrase += " fifteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 6) {
      phrase += " sixteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 7) {
      phrase += " seventeen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 8) {
      phrase += " eighteen";
    }
    if (secondHalf[0] === 1 && secondHalf[1] === 9) {
      phrase += " nineteen";
    }

    if (secondHalf[0] === 2) {
      phrase += " twenty";
    }
    if (secondHalf[0] === 3) {
      phrase += " thirty";
    }
    if (secondHalf[0] === 4) {
      phrase += " fourty";
    }
    if (secondHalf[0] === 5) {
      phrase += " fifty";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 1) {
      phrase += " one";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 2) {
      phrase += " two";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 3) {
      phrase += " three";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 4) {
      phrase += " four";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 5) {
      phrase += " five";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 6) {
      phrase += " six";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 7) {
      phrase += " seven";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 8) {
      phrase += " eight";
    }
    if (secondHalf[0] !== 0 && secondHalf[0] !== 1 && secondHalf[1] === 9) {
      phrase += " nine";
    }

    phrase += " AM";
    console.log(number + " = " + phrase);
  } else {
    console.log('\n!' + number + ": Input Error!");
  }

  
}

console.log("\nTIME TO WORDS");
console.log("-----------------");
splitNumber(1201);