// botões
const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");

//inputs
const passLength = document.getElementById("passLenght");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const result = document.getElementById("result");

function getRandomLower() {
  const charLower = "abcdefghijlmnopqrstuvwxyz";
  return charLower[Math.floor(Math.random() * charLower.length)];
}
function getRandomUppercase() {
  const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return charUpper[Math.floor(Math.random() * charUpper.length)];
}
function getRandomNumber() {
  const num = "0123456789";
  return num[Math.floor(Math.random() * num.length)];
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()[]{}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomChar = {
  lower: getRandomLower,
  upper: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

btnGenerate.addEventListener("click", () => {
  const lenght = passLength.value;
  const haslower = lowerCase.checked;
  const hasUpper = upperCase.checked;
  const hasNumber = number.checked;
  const hasSymbol = symbol.checked;

  result.innerText = generatePasswd(
    haslower,
    hasUpper,
    hasNumber,
    hasSymbol,
    lenght
  );
});

function generatePasswd(lower, upper, number, symbol, lenght) {
  let gPasswd = "";

  const typesCount = lower + upper + number + symbol; // variavel opcional para evitar que o script rode varias vezes
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => {
      return Object.values(item)[0];
    }
  );

  for (let i = 0; i < lenght; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      gPasswd += randomChar[funcName]();
    });
  }

  const finalyPasswd = gPasswd.slice(0, lenght);
  return finalyPasswd;
}

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.value);
  alert("texto copiado " + result.value);
});
