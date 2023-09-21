// function saveDataToDB(data){
//     return new Promise((resolve,reject)=>{
//         let range = Math.floor(Math.random()*10+1);
//         if(range>4){
//             resolve("data saved ");
//         }else{
//         reject("data was not saved");
//         }
//     });
    
    
// }

// // saveDataToDB("Radhika").then((resolve)=>{
// //     console.log("data1 was saved",resolve);
// //     return saveDataToDB("Hello")
   
// // }).then((resolve)=>{
// //     console.log("data 2 saved");
// // })
// // .catch((reject)=>{console.log("not saved",reject);});

// // 

// let url = "https://catfact.ninja/fact";
//  fetch(url).then((res)=>{
//     console.log(res);
//     return res.json();
    
//  }).then((data)=>{console.log(data);
// return fetch(url);})
// .then((res)=>{return res.json();}).then((data)=>{console.log(data);})
//  .catch(()=>{console.log("Failed toload");
// })

let url ="https://catfact.ninja/fact";
let body = document.querySelector("body");

async function getFact(){
    let res = await axios.get(url);
    let p= document.querySelector("p");
    p.innerText=res.data.fact;
    
    
    console.log(res.data.fact);
}
getFact();
console.log("HI");
//this will work normally our fetch will work in bg ansycly 
// function demo(){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let random = Math.floor(Math.random()*10)+1;
//         console.log(random);
//         resolve();
//     },1000);

// })


// }
// async function greet(){
//     await demo();
//     await demo();
// }
