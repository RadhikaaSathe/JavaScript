// let p = document.createElement('p');
// let body = document.querySelector("body")
// body.append(p);


// p.innerHTML="I am Red";
// p.classList.add("red");

// let h3 = document.createElement('h3');
// body.append(h3);
// h3.innerText="Hey i am blue h3!";
// h3.style.color="blue";

// let div = document.createElement("div");
// let h = document.createElement("h1");
// let p1 = document.createElement("p");

// h.innerText="I am in div";
// p1.innerText ="me too";
// div.append(h);
// div.append(p1);

// body.append(div);
//  div.classList.add("box");

//  let btn = document.querySelector("button");
//  btn.style.backgroundColor="Red";
//  btn.onmouseenter =()=>(btn.style.backgroundColor="Black");

let h=document.createElement("h1");
let body= document.querySelector("body");
h.innerText="Practice Dom";
body.appendChild(h);

let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

for(lis of li){
    lis.style.color="orange";
}

let btn =document.querySelector("button");

let h2= document.createElement("h2");
h2.innerText="I am h2";
let h3 = document.createElement("h3");
h3.innerText="I am h3";
body.append(h2,h3);

let btn2 = document.createElement("button");
btn2.innerText="new Button"

let p =document.querySelector("p");
p.insertAdjacentElement("afterend",btn2);

function changeColor(){
    this.style.backgroundColor="aqua";
}
btn2.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);


