let todo = [];
let req = prompt("Enter your option what to do in the todo:");
while(true){
    if(req == "quit"){
        console.log("Quitting the todo app");
        break;
    }
    else if(req == "add"){
        task = prompt("Enter the task you want to add:")
        todo.push(task);
        console.log("Task added successfully");
    }
    else if(req == "list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index you want to delete:");
        todo.splice(idx,1);

    }
    else{
        console.log("Invalid choice");
    }
    req = prompt("Enter what to do next in the todo:");

}