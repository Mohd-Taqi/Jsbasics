console.log(2**3);
console.log(16**(1/2)); // gives sqrt of a number 
//1
const x = 1 / 0;
console.log(x);
let y = Number.isFinite(x);  //give  false for  infinity,negative,NAN etc read more about these in mdn or codecademy
console.log(y);

//2
const z = 13 / 5;
// x = 2.6

console.log(Number.isInteger(x));
// Output: false

//3
const f = 420;

console.log(f.toExponential());
// Output: 4.2e+2

const d = 5;

console.log(typeof d.toExponential());
// Output: string

//4
var t=3.12332;
var default_value=32;
console.log(t.toFixed(2))
console.log(default_value.toFixed(3))  //  it prints 0 value as default

//5
const euler = 2.71828;

console.log(euler.toPrecision(5));
console.log(euler.toPrecision(3));
console.log(euler.toPrecision(1));  // differnt from toFixed



var  p = 5;

console.log(p.toString());
// Output: 5
 p= 5;

console.log(typeof p.toString());
// Output: string
