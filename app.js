//claabacks, promises, async/await
//PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

/*
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
*/

//promise object - represents the eventual compelation or failure of asynchronous operation and its resulting
//promise has three state: 
/*pengning - intitial state 
resolved - means the operation has successfully completed
rejected - so it means operation failed
*/
//then - used to resolve
//catch - to rejected results

//try to change the condition to : if (!value) etc

// const heading1 = document.querySelector('.one')
// const heading2 = document.querySelector('.two')
// const heading3 = document.querySelector('.three')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', ()=>{
//     addColor(10000, heading1, 'red')
//     .then(()=>addColor(17000, heading2, 'green')
//     .then(()=>addColor(5000, heading3, 'yellow')))
// })

// function addColor(time, element, color){
//     return new Promise((resolve, reject)=>{
//         if(element){
//             setTimeout(()=>{
//                 element.style.color = color
//                 resolve()
//             }, time)
//         }else{
//             reject(new Error(`There is no such ${element} element`))       
//         }
//     })
// }


const heading1 = document.querySelector('.one')
const heading2 = document.querySelector('.two')
const heading3 = document.querySelector('.three')
const btn = document.querySelector('.btn')

btn.addEventListener('click', async ()=>{
    displayColor()
})


async function displayColor(){
try{
    await addColor(2000, heading1, 'red')
    await addColor(2000, heading2, 'green')
    await addColor(2000, heading3, 'yellow')    
}catch(error){
    console.log(error)
}
}

function addColor(time, element, color){
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color
                resolve()
            }, time)
        }else{
            reject(new Error(`There is no such ${element} element`))       
        }
    })
}