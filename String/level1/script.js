// Strings are immutable objects in javascript means the original strings can't be changes we have to create a new string
let str = "LearnCoding"
let str2 = "Some Text"

for (const val of str) {
    console.log(val);
}
console.log(str[0],str[1]);

// anoter way to create a string is template literal

let some = `This is a template literal`
console.log(some,typeof some)

// advantage of tl is 
const obj = {
    item :"pen",
    cost:10,
}

console.log("the cost of ",obj.item, "is",obj.cost,"rupees");
console.log(`The cost of ${obj.item} is ${obj.cost}`);  // readability improve this is called as string interpolation

let text = "this\ntext"  // here escape characters will take a length as 1 not 2 
console.log(text.length);

//String methods 
console.log(str.toUpperCase())
console.log(str)
console.log(str.toLowerCase())
console.log(str.slice(0,5))  //ending index is non-exclusive like end = end-1
console.log(str2.replace(/ /g,""));
 
 text = "  hello  "
 console.log(text.replace(/ /g,""))
 console.log(text = text.trim())
 console.log(text.length)
 text = "hello hello hello"
 console.log(text.replace("hello","help"))
 console.log(text.replaceAll("hello","help"))

//  text = "hello world";
// text = text.replace(/ /g, "");
// console.log(text); // Outputs: "helloworld"

let username = prompt("Enter your name","some text")
username = username.replace(/ /g,"");
console.log("@"+username+ Math.floor(Math.random() * 10))
