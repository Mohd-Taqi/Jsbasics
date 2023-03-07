console.log(Math.floor(5/2))
console.log(5.0/2.0)
hunt=true
if(hunt)
console.log("taqi")
else
console.log("taqi1")

// Three different ways for printing 

console.log("It's a \"moot\" point.");
console.log('It\'s a "moot" point.');
console.log(`It's a "moot" point.`);

// lexical environment example (local resource memory +lexical environment of a parent or Refrence)
// var b1=10;
function a(){
 let b1=10;
 
    b();
    function b(){
        console.log(b1);
    }
}
a();
// console.log(b1)

async function A() {
    await(axios.get(`Hint it`));
}

A();