//1
// function fruit (){
//     console.log(name);//undefined
//     console.log(price);//uncaught ref error
    
//     var name="apple";
//     let price =20;
// }
// fruit();

//2
// for(var i=0;i<3;i++){
//     setTimeout(()=>{(console.log(i))},1); //3 times 3
// }
// for(let i=0;i<3;i++){
//     setTimeout(()=>{(console.log(i))},1);//0.1.2
// }

//4
// console.warn(+true);//1
// console.warn(typeof +true);//number

//5
// console.warn(!"Aman"); //false
// console.warn(typeof"Aman");//string


//6
//objectName.propertyName
//objectName["propertyName"]
// let data ="size";
// const bird ={
//     size: "small",

// };
// console.log(bird[data]);//small
// console.log(bird["size"]);//small
// console.log(bird.size);//small
// console.log(bird.data);//undefined


//7
// let c={
//     name:"peter",
// };
// let d;
// d=c;//both have same memo ref ,obj returns memo ref
// c.name="Aman";
// console.log(d.name);

//8
// var x;
// var x=10;
// console.log(x);

//9
// var x;
// let x=10;
// console.log(x);
// //legal showding
// var x;
// {
// let x=10;
// console.log(x);
// }


//10
// let a=3;
// let b=new Number(3);

// console.log((a==b));//ture
// console.log(a===b);//fales

//11
// let name;
// let nmae={

// };
// console.log(name);//undefined

//12
// function fruit(){
//     console.log("Woof");
// }
// fruit.name="Apple";//no error boz like class we can add one more key 

// fruit();


//13
//when one value is string it will get concatinated with 2nd 
// function sum(a,b){
//     return a+b;
// }
// console.warn(sum(1,"2"));//12

//14
// let number=0;
// console.log(number++);//0 and updated to 1
// console.log(++number);//alredy 1 so it will 2
// console.log(number);//2

//15
//boz ...args is array and array is obj
// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(25);

//16
// function getAge(){
//     'use strict';//makes it strickt to declare variable 
//     age=11;
//     console.log(age);
// }
// getAge();

//17
// const sum= eval('10*10+5');//eval takes string and convert to num
// console.warn(sum);//105

//18
//how long it 'cool secret willbe 
//session storage goes once we close tab but local storage stays till 1 month or so
//sessionStorage.setItem('cool_secret',123);

//19
// const obj ={
//     hello:"a",
//     2:"b",
// };
// //boz prop key are converted to string bydefuult
// console.log(obj.hasOwnProperty("hello"));//true
// console.log(obj.hasOwnProperty(hello));//hello isconsider as varibale here so error


//20
// const obj={
//     a:"one", b:"two",a:"repet",
// };
// console.log(obj);//a:"repet" b:"two" bozwe override value of a
// //but position of a will be same

//23
// const person ={
//     name:"Lydia",
// };
// function sayHi(age){
//     console.log(`hi ${this.name} your age is ${age}`);
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21)());

//24
// function sayHi(){
//     return (()=>0)();//it return 0 so number 
//return ()=>0;//function boz it hasnt called
// }
// console.log(typeof sayHi());//number 



//26
//console.log(typeof typeof 1);//string boz type of "number"

//27
// const numbers =[1,2,3];
// numbers[11]=10;

// console.log(numbers);//in btewn value will be empty


//28
// const num =[1,2,3];
// num[3]=num;
// console.log(num);//3rd position will be infinite loop

//30
//console.log(..."Aman");//spred op
//rest
// function print(...args){
//     console.log(args);
// }
// print(1,3,4);
// //spred destrucres to sep var
// let color=["red","pink"];
// let newcolor=[...color,"cherryred"];
// console.log(newcolor);


//37
console.log(typeof 3 +1+'5');//itst numer of 3 so number and then concatination 15
let data = 3+1+'5';
console.log(typeof data);//string
console.log(typeof (3 +1+ +'5'));//9//number
