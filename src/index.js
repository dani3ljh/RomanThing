const body = document.body;
const input = document.getElementById("input");
const output = document.getElementById("output");

function handleInput() {
  event.preventDefault();

  const numberList = textToNumberList(input.value);
  let romanString = "";

  for (let i = 0; i < numberList.length; i++) {
    romanString += numberToRomanNumeral(numberList[i]);
    romanString += " ";
  }
  
  output.innerHTML = romanString;
}

function textToNumberList(text) {
  const res = new Array(text.length);
  
  for (let i = 0; i < text.length; i++) {
    res[i] = text.charCodeAt(i);
  }

  return res;
}

function numberToRomanNumeral(num) {
  let ones = num % 10;
  let tens = num % 100 - ones;
  let hundreds = num % 1000 - tens - ones;
  let thousands = (num % 10000 - hundreds - tens - ones) / 1000;
  hundreds = hundreds / 100;
  tens = tens / 10;

  let res = "";

  for (let i = 0; i < thousands; i++) {
    res += "M";
  }

  res = appendRomanChars("C", "D", "M", hundreds, res);
  res = appendRomanChars("X", "L", "C", tens, res);
  res = appendRomanChars("I", "V", "X", ones, res);

  return res;
}

function appendRomanChars(char1, char2, char3, value, res) {
  if (value == 9) {
    res += char1;
    res += char3;
    value = 0;
    return res;
  }
  
  if (value == 4) {
    res += char1;
    res += char2;
    value = 0;
    return res;
  }
  
  if (value > 4) {
    res += char2;
    value -= 5;
  }
  
  for (let i = 0; i < value; i++) {
    res += char1;
  }

  return res;
}
