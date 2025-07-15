// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis = document.querySelectorAll("li");
// div.addEventListener("click",function(event){
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }Event bubbling
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();

//     })
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});