const select = document.querySelector("#pswlength");
const button = document.querySelector("#generate");
const passcont = document.querySelector("#genpasscont");
const cont = document.querySelector(".cont");
// var random = Math.floor(Math.random() * 10);
// let x = Math.random(1, 9);
// let y = Math.random(2, 9);
// let firstPswValue = Math.floor(Math.random() * 10);
// let secondPswValue = Math.floor(Math.random() * 10);
// let thirdPswValue = Math.floor(Math.random() * 10);
// const pswValue = Math.floor(Math.random() * 10)
// but we have to floor it to remove the .134964.....
const generate = () => {
// setInterval(function () { scrool.scrollIntoView({behavior: 'smooth', block: 'end'}) }, 1000);
    

  if (select.value === "6") {
    // alert(Math.floor(Math.random() * 10));
    createSixPasswordElement();
  } else if (select.value === "8") {
    // alert(Math.floor(Math.random() * 10));
    createEightPasswordElement();
  } else if (select.value === "10") {
    // alert(Math.floor(Math.random() * 10));
    createTenPasswordElement();
  } else if (select.value === "12") {
    // alert(Math.floor(Math.random() * 10));
    createTwelvePasswordElement();
  } else if (select.value === "14") {
    createFourteenPasswordElement();
    // alert(Math.floor(Math.random() * 10));
  } else if (select.value === "16") {
    // alert(Math.floor(Math.random() * 10));
    createSixteenPasswordElement();
  } else if (select.value === "18") {
    // alert(Math.floor(Math.random() * 10));
    createEighteenPasswordElement();
  } else if (select.value === "20") {
    // alert(Math.floor(Math.random() * 10));
    createTwentyPasswordElement();
  }
}
const changeBg = () => {
    if (select.value < 16) {
        cont.className = "cont-weak";
    } else {
cont.className = "cont-strong"
    }
 };
const createSixPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}

const createEightPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createTenPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createTwelvePasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createFourteenPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createSixteenPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createEighteenPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
const createTwentyPasswordElement = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "genPassword";
    newDiv.appendChild(document.createTextNode(`${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`));
    passcont.appendChild(newDiv);
}
button.addEventListener("click", generate);
select.addEventListener("change", changeBg)
let letters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ".",
  "$",
  "@",
  ">",
  "+",
  "-",
  "`",
  "#",
  "%",
  "&",
  "^",
  "_",
  "!",
  "|",
  "=",
  "<",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let randomLetter = letters[Math.floor(Math.random() * letters.length)];
// var items = ["yes", "no", "maybe"];
// var item = items[Math.floor(Math.random() * items.length)];
// console.log(item);
console.log(randomLetter);
// let clonedobj = {...objtocopy };
// setTimeout(() => {
  
// console.clear();
// }, 1000);
setInterval(() => {
  passcont.scrollIntoView({ behavior: "smooth", block: "end" });
}, 0050);

// setInterval(() => {
//   passcont.scrollIntoView({ behavior: "smooth", block: "end"});
// }, 0050);
