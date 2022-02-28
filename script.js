const date = new Date();
const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];

console.log(month, day, year);

let count = 0;

let list = localStorage.getItem("Tasks");

document.getElementById("today-text").innerHTML = `Today ${month}-${day}-${year}`;

let inputListener = document.getElementById("input-text");
let taskStorage = [list];

const taskArray = list.split(",")

for(let i = 0; i < taskArray.length; i++){
    let storeInput = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = `${storeInput} <div class="task" onclick=createDash(${count})>-${taskArray[i]}</div>`;
    count += 1;
}

function getInput(){
    let task = document.getElementById("input-text").value;
    let input = document.getElementById("input").innerHTML;
    document.getElementById("input-text").value = "";
    document.getElementById("input").innerHTML = `${input} <div class="task" onclick=createDash(${count})>-${task}</div>`;
    count += 1;
    taskStorage.push(task);
    localStorage.setItem("Tasks", taskStorage);
    }

function getWeekInput(){
    let task = document.getElementById("week-input-text").value;
    let input = document.getElementById("week-input").innerHTML;
    document.getElementById("week-input-text").value = "";
    let weekday = document.getElementById("options").value;

    let taskInput;

    switch(weekday){
        case 'Monday':
            taskInput = document.getElementById("mon").innerHTML;
            document.getElementById("mon").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;

        case 'Tuesday':
            taskInput = document.getElementById("tues").innerHTML;
            document.getElementById("tues").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;

        case 'Wednesday':
            taskInput = document.getElementById("wed").innerHTML;
            document.getElementById("wed").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;
         
        case 'Thursday':
            taskInput = document.getElementById("thurs").innerHTML;
            document.getElementById("thurs").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;

        case 'Friday':
            taskInput = document.getElementById("fri").innerHTML;
            document.getElementById("fri").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;

        case 'Saturday':
            taskInput = document.getElementById("sat").innerHTML;
            document.getElementById("sat").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;

        case 'Sunday':
            taskInput = document.getElementById("sun").innerHTML;
            document.getElementById("sun").innerHTML = `${taskInput} <a class="weekTask" >-${task}</a>`;
            break;
        
        default: 
            return null;

    }

  
   
}

function createDash(count){
    console.log("pressed")
    document.getElementsByClassName("task")[count].classList.add("dashed");
    //document.getElementById("task").classList.add("dashed");
}



inputListener.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("input-btn").click();
    }
})


const example = {
    "name": "Izzy",
    "swag": "None",
    "stolen swag": 3
}
