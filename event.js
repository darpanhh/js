//Events
// let btn = document.querySelector("button");
// let btns = document.querySelectorAll("button");
// function sayHello(){
//     console.log("HELLO");
// }
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onclick = function(){
//         console.log("Darpan GIRI");
//     }
//     btn.onmouseenter= function(){
//         console.log("You are about to entered a button");
//     }
// }

// btn.onclick = function(){
//     alert("Buttoon was clicked");
// };
// btn.onclick = sayHello;//why not sayHello()
//Events listener
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("click",function(){
//         console.log("button was clicked");
//         console.log("Try again")
//     });
// }
//Activity
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3= document.querySelector("h3");
//     let randomColor= getRandomColor();
//     h3.innerText= randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor=randomColor;
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }
// let h3 = document.querySelector("h3");
// h3.addEventListener("click",function(){
//     h3.innerText="WOW";
// });
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor="green";
// })
// let btn = document.querySelector("button");
// let para = document.querySelector("p");
// let h3= document.querySelector("h3");
// let h1= document.querySelector("h1");
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener('click',changeColor);
// para.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);
// h1.addEventListener('click',changeColor);
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button Clicked");
// })
// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     console.dir(event);
//     console.log("key=",event.key);
//     console.log("Codekey=",event.code);
//     console.log("Keyword was released");
// })
// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(event){
//     console.log("Code",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("Moves forward");
//     }
//     else if(event.code=="ArrowDown"){
//         console.log("Moves backward");
//     }
//     else if(event.code=="ArrowLeft"){
//         console.log("Moves left ");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("Moves right");
//     }
// })
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     // console.log("Form submitted successfully");
//     //event.preventDefault();
//     alert("Form submitted successfully");
//     event.preventDefault();
// });
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#username");
//     let pass = document.querySelector('#password');
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`HI ${user.value} your password is: ${pass.value}`);
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);
//      let user = form.elements[0];
//      let pass = form.elements[1];
//      console.log(user.value);
//      console.log(pass.value);
//      alert(`HI ${user.value} your password is: ${pass.value}`);
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
// let user = document.querySelector("#username");
// user.addEventListener("change",function(event){
//     console.log("input changed");
//     console.log("final value:",this.value);
// });
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
// let user = document.querySelector("#username");
// user.addEventListener("input",function(event){
//     console.log(this.value);
// });
//Text Editor
// let inp = document.querySelector("input");
// let p = document.querySelector("p");
// inp.addEventListener("input",function(){
//     console.log(this.value);
//     p.innerText=this.value;
// });

let para1= document.createElement("p");
para1.innerText="Hey I'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText="I am blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");


let div =  document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText="I am in a div";
p.innerText = "Me too";
div.append(h1);
div.append(p);
div.classList.add("box");
document.querySelector("body").append(div);

