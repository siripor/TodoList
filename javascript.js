
let addtask = document.getElementById("taskInput");//ช่องเติมข้อมูล
let addBtn = document.getElementById("addTaskButton");//กดส่งข้อมูล
let getdata = document.getElementById("taskList");//เก็บข้อมูลไว้ใน ul
let addList = document.getElementsByClassName("list")//เก็บข้อมูลไว้ใน li



//addEventListener คือเพิ่มเข้าระบบ โดยกดclick
addBtn.addEventListener("click",add);

function add() {
    if(addtask.value===''){
        alert("Pls enter a task")
    }else{
        let li = document.createElement("li");
        li.classList.add("list-container");
        let span = document.createElement("span");
        span.classList.add("list");
        span.innerHTML=addtask.value;
       


        //func del
   let deleteBtn = document.createElement("button");
   deleteBtn.innerHTML="Del";
   deleteBtn.addEventListener("click",Del);
   li.appendChild(span);
   li.appendChild(deleteBtn);
   getdata.appendChild(li);
   addtask.value='';

    }
}

function Del(event){
    let li = event.target.parentElement;
    getdata.removeChild(li);
}