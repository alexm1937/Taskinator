var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //validation if strings are empty
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!")
        return false;
    }
    formEl.reset();
    //package data as obj
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //sent as arg to createTaskEl
    createTaskEl(taskDataObj);
}
var createTaskEl = function(taskDataObj) {
        //create list item
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        //add task id using data attribue
        listItemEl.setAttribute("data-task-id", taskIdCounter);

        //create divv for new task
        var taskInfoEl = document.createElement("div"); 
        taskInfoEl.className = "task-info";
        //add html content to div
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
        listItemEl.appendChild(taskInfoEl);
        tasksToDoEl.appendChild(listItemEl);
        taskIdCounter++;
}
var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    //edit btn
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit"
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.class = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);
    
};
formEl.addEventListener("submit", taskFormHandler);