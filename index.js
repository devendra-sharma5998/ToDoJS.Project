

const taskList =[];
 const miniTaskList=[];
//  const taskhide=[];

const addTask =()=>{

    const add_item = document.getElementById("add_model").value;
    const model = document.getElementsByClassName("container")
     

    // const blur=document.getElementById("blurr")
    const tempObj ={
        id: Date.now(),
            taskname: add_item
    }
   
    taskList.push(tempObj);
    addTaskonscreen();
    console.log(model);
    model[0].style.visibility="hidden"

}


function openModel(){

    const model = document.getElementsByClassName("container")
    document.getElementById("main-container").style.filter="blur(8px)"
    model[0].style.visibility="visible"
    // document.getElementById("parent").style.filter="blur(8px)";
}



const taskhide=[];
function addTaskonscreen(){
    let uniqueId=Date.now()
    let element = document.createElement("div");
    element.setAttribute("id",uniqueId)
    console.log(uniqueId)
    taskhide.push(element)
    let heading=document.createElement("h4")
    heading.style.textAlign="center"
    let strtline=document.createElement("hr")
    let unorderlist=document.createElement("ul");
    unorderlist.setAttribute('id','unlist');
    let iconAdd = document.createElement("i");
    let iconDelete = document.createElement("i")
    document.getElementById("main-container").style.filter="blur(0px)"

    
    element.setAttribute("class","child")
    
    iconAdd.setAttribute("class","fa-solid fa-plus")
    iconAdd.setAttribute("id","mini_add")
    
    iconDelete.setAttribute("class","fas fa-trash-alt")
    iconDelete.setAttribute("id","trash")
    
    const existingElement = document.getElementById("parent")
    
    existingElement.appendChild(element);
    element.appendChild(heading)
    element.appendChild(strtline)
    heading.innerText=taskList[taskList.length-1].taskname;
    element.appendChild(unorderlist);
    element.appendChild(iconAdd)
    element.appendChild(iconDelete)
    
    heading.addEventListener('click', headclick);
    
    iconAdd.addEventListener("click",function(){
        document.getElementById("last-container").style.visibility="visible";

    })
    
    iconDelete.addEventListener("click",function(){
        element.remove();
    })
}

function headclick(e){
    let requiredid=e.target.parentElement.id;
    for(let i=0;i<taskhide.length;i++){
        if(requiredid==taskhide[i].id){
            continue;
        }else{
            taskhide[i].style.display="none"
        }
    }
}


// function taskhide(){
//     let currentID= target.parentElement.id;
//         heading.innerText= target.innerText;
//         heading.style.display="none";
//         for(let i=0;i<arrobj.length;i++){
//             if(arrobj[i].id==currentID){
//                 continue;
//             }else{
//                 arrobj[i].style.display="none";
//             }
//         }
// }


function addTask2(){
let todotask=document.getElementById("add_model2").value;
let tempobj2={
    id:Date.now(),
    totask:todotask
}
miniTaskList.push(tempobj2);
document.getElementById("last-container").style.visibility="hidden"

tolist();
}
function tolist(){
    let todolist=document.createElement("li");
    todolist.setAttribute("id","listfortask")
    todolist.setAttribute("type","disc")
    document.getElementById("unlist").appendChild(todolist)

    todolist.innerText=miniTaskList[miniTaskList.length-1].totask
    let taskdone=document.createElement("button");
    taskdone.setAttribute("id","mark-done")
    taskdone.innerText="done";
    
    todolist.appendChild(taskdone)
    taskdone.addEventListener("click",function(){
    document.getElementById("listfortask").style.textDecoration="line-through"
    taskdone.remove();
    })


}








