const project= document.getElementById("project");

project.innerHTML="<h1>hello world2</h1>";
project.style.color="red";
/*
let age=6;
let num="abdo";
console.log(num);
console.log(num+ " is age  "+age);
console.log("my name is " +num);
*/
let person ={
    num:"abdo", 
    age:27,
    food:{
        break:"pain",
        dinner:"poisson"
    }
};
person.num="fekih";
console.log(person);
console.log(person.age);
let farm=['dog','horse','cat'];
console.log(farm);

function hello(nam,prenom) {


console.log("hello" + nam + " " +prenom);
}
hello("abd","fekih");

function square(number){
    return number * number ;
}
console.log(square(4));