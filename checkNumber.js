const isEven = require("./iseven");

const number = 10;

if (isEven(number)) {
    console.log(number + " is Even");
}
else {
    console.log(number + " is Odd");
}