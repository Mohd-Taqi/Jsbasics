import axios from "axios";

let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(axios.get(`http://jsonplaceholder.typicode.com/users/${i}`))
}
// console.log(arr)
Promise.all(arr).then(res =>{
    // res.forEach(item =>{
    //     console.log(item.data)
    // })
    for(let i=0; i<arr.length; i++)
      console.log(res[i].data)
})