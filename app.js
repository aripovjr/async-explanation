//claabacks, promises, async/await
//PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const promise = new Promise((resolve, reject)=>{
let value = true 
if(value){
    resolve('hey value is ture')
}else{
    reject('there was an error, value is false')
}  
})

promise.then(word=>console.log(word))
promise.catch(error=>console.log(error))

//promise object - represents the eventual compelation or failure of asynchronous operation and its resulting
//promise has three state: 
/*pengning - intitial state 
resolved - means the operation has successfully completed
rejected - so it means operation failed
*/
//then - used to resolve
//catch - to rejected results

//try to change the condition to : if (!value) etc