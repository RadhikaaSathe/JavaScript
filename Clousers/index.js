function x(){
    let a=18;
   return function y(){
      console.log('inside function y',a);
    }
}
//here even thogh call stack has gone for y x has bundle up lexical scope variable 
//function and return them which are stored in Z 
let z = x();
console.log(z());