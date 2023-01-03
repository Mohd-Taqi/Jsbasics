// import  readlineSync from "readline-sync"
// import axios from "axios"
// import chalk from "chalk"
// console.clear();
// let apikey="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";
// // console.log(chalk.yellowBright("------------------"))
// axios.get(`https://api.github.com/users`,{
//     auth:{
//     username: "Mohd-Taqi",
//     password: apikey
//   }

// }).then(res =>{
//     // console.log(res.data)
//     let data = res.data
//     let arr=data.map(item=>{
//         return axios.get(`https://api.github.com/users/${item.login}`) 
//     })
//     // console.log(arr);
//     Promise.all(arr).then(res =>{
//         res.forEach(item =>{
//             console.log(item.data.login , item.data.followers)
//         })
//         .catch(err => console.error(err))
//     })
// })




import axios from "axios";

let apikey = "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";
let options = {
    auth: {
        username: "Mohd-Taqi",
        password: apikey
    }
}
axios.get(`https://api.github.com/users`, options).then(res => {
    let data = res.data;
    let arr = data.map(item => {
        return axios.get(`https://api.github.com/users/${item.login}`, options)
    })
    // console.log(arr)
    Promise.all(arr).then(res => {
        res.forEach(item => {
            console.log(item.data.login, item.data.followers, item.data.id)
        })
    })
        .catch(err => console.error(err))
})