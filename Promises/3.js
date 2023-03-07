const url="https://api.github.com/users/hadley/orgs"
const  responsePromise= fetch(url);

responsePromise
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
   console.log(error);
})

console.log("Fetching Done ...");
