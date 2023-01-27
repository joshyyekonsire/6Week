function goRoman(num) {
  let Number = num;
  let roman = "";
  while (num > 0) {
    if (num >= 1000) {
      roman += "M";
      num -= 1000;
    } else if (num >= 500) {
      roman += "D";
      num -= 500;
    } else if (num >= 100) {
      roman += "C";
      num -= 100;
    } else if (num >= 10) {
      roman += "X";
      num -= 10;
    } else if (num >= 5) {
      roman += "V";
      num -= 5;
    } else if (num >= 1) {
      roman += "I";
      num -= 1;
    } else {
      console.log ('err');
    }
  }
  console.log(`Romanize ${Number}: `);
  console.log(roman);
}

goRoman(1);
goRoman(9);
goRoman(12);
goRoman(133);
goRoman(1000);
goRoman(3231);
