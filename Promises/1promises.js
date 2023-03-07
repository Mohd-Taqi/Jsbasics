import  readlineSync from "readline-sync"
import axios from "axios"
// import chalk from "chalk"
for(i=1; i<=10; i++){
    console.log(i);
     axios.get(`https://jsonplaceholder.typicode.com/users/}${id}`)
     .then(res=>{
           console.log(res.data.username)
     })
}