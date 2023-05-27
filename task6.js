function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    var taskText = taskInput.value;
    var taskItem = document.createElement("li");
    taskItem.innerHTML = '<input type="checkbox" onchange="toggleTask(this)">' + taskText;
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
}

function toggleTask(checkbox) {
    var taskItem = checkbox.parentNode;
    if (checkbox.checked) {
        taskItem.style.textDecoration = "line-through";
    } else {
        taskItem.style.textDecoration = "none";
    }
}