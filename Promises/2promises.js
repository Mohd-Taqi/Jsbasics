import axios from "axios";
function hitAPI(id){
   return  axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);        // don't use https why ?
    
}
let PromiseArray=[];
for(let i=1; i<=10; i++){
   PromiseArray.push(hitAPI(i));
}
// console.log(PromiseArray);
Promise.all(PromiseArray)
.then((response)=>{
  response.forEach((ele)=>{
     console.log(ele.data.name, ele.data.id);
  })
})
.catch((err)=>{
    console.error(err);
})



// import axios from "axios";


// function hitAPI(id) {
//     return axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
// }

// let promiseArray = [];
// for (let i = 10; i >= 1; i--) {
//     promiseArray.push(hitAPI(i));
// }
// // console.log(promiseArray);

// Promise.all(promiseArray)
//     .then((responses) => {
//         responses.forEach((ele) => {
//             console.log(ele.data.name, ele.data.id);
//         })
//     })
//     .catch((err) => {
//         console.error(err);
//     })

    