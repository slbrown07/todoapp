let myDate = new Date();
let listArray = ['General'];
let taskArray = [];

(function () {
    document.getElementById('myCurDate').innerHTML += myDate.toDateString();
    listCollections();
})();

function unHideCreate() {
    document.getElementById('createDiv').style.display = "inline";
}

function enterCreate(event) {
    switch(event.which) {
        case 13:
            createList();
            break;
    }
}

function createList() {     
    let listName = document.getElementById("listInput").value;
    listArray.push(listName);
    document.getElementById("listInput").value = "";
    document.getElementById("createDiv").style.display = "none";
    listCollections();
}

function unHideEdit() {
    listEdit = document.getElementById("listOptions").value;
    document.getElementById("editInput").value = listArray[listEdit];
    document.getElementById('editSpan').style.display = "inline";
}

function enterEdit(event) {
    switch(event.which) {
        case 13:
            editList();
            break;
    }
}

function editList() {
    let listId = document.getElementById("listOptions").value;
    let renameItem = document.getElementById("editInput").value;
    listArray[listId] = renameItem;
    document.getElementById("editInput").value = "";
    document.getElementById("editSpan").style.display = "none";
    listCollections();
}

function deleteList() {
    deleteItem = document.getElementById("listOptions").value;
    listArray.splice(deleteItem,1);
    listCollections();
}

function listCollections(){
    document.getElementById("listOptions").innerHTML = `<select name="toDoList" id="listOptions"></select>`;
    for (let i=listArray.length-1; i>=0; i--) {
        document.getElementById("listOptions").innerHTML += `<option value="${[i]}">${listArray[i]}</option>`;      
    }
}

function enterNewTask(event) {
    switch(event.which) {
        case 13:
            createTask();
            break;
    }
}

function createTask() {
    let taskObject = {
        listName: "",
        taskName: "",
        completeBox: "No"
    }
    let listId = document.getElementById("listOptions").value;     
    taskObject.listName = listArray[listId];
    taskObject.taskName = document.getElementById("taskOption").value;
    taskArray.push(taskObject);
    document.getElementById("taskOption").value = "";
    taskCollection();
}

function enterEditTask(event,taskIndex) {
    switch(event.which) {
        case 13:
            editTask(taskIndex);
            break;
    }
}

function editTask(taskIndex) {
    renameTask = document.getElementById(`taskName${taskIndex}`).value;
    console.log(renameTask);
    taskArray[taskIndex].taskName = renameTask;
    console.log(taskArray);
    taskCollection();
}

function deleteTask(taskIndex) {
    taskArray.splice(taskIndex,1);
    taskCollection();
}

function taskCollection(){
    document.getElementById("taskItem").innerHTML = `<ul id="taskItem"></ul>`;
    let currentList = document.getElementById("listOptions").value;
    for (let i=0;i<taskArray.length; i++) {
        if (taskArray[i].listName==listArray[currentList]) {
            document.getElementById("taskItem").innerHTML += 
            `<li>
                <input type="checkbox" id="check${i}"/>
                <input type="text" class="taskDesc" id="taskName${i}" 
                    value="${taskArray[i].taskName}" onkeypress="enterEditTask(event, ${i})"/>
                <span onclick="editTask(${i})"><i class="far fa-edit"></i></span>
                <span onclick="deleteTask(${i})"><i class="far fa-trash-alt"></i></span>
            </li>`;      
        }
        
    }
}
 function deleteCompleted() {

 }