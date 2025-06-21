//Higher order functions
// function multiplegreet(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }

// }
// let greet = function(){
//     console.log("Hello");
// }
// multiplegreet(greet,2);
//Returns a function
// function oddorevenfactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0))
//         }
//         return odd;
//     }
//     else if(request == "even"){
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("Enter correct request:");
//     }

// }

// oddorevenfactory("odd");
//Methods
// const calculator = {
//     add (a,b){
//         return a+b;
//     },
//     subtract (a,b){
//         return a-b;
//     },
//     multiply (a,b){
//         return a*b;
//     }
// };