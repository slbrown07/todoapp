let myDate = new Date();
let listArray = ['General'];
let taskArray = [];

console.log(listArray);
console.log(taskArray);

(function () {
    document.getElementById('myCurDate').innerHTML += myDate.toDateString();
    listCollections();
})();

function createList() {     
    let listName = document.getElementById("listInput").value;
    listArray.unshift(listName);
    document.getElementById("listInput").value = "";
    document.getElementById("inputCont").style.display = "none";
    listCollections();
}

function editList() {
    renameItem = document.getElementById("renameInput").value;
    listArray[editItem] = renameItem;
    document.getElementById("renameInput").value = "";
    document.getElementById("renameCont").style.display = "none";
    listCollections();
}

function deleteList() {
    deleteItem = document.getElementById("listOptions").value;
    listArray.splice(deleteItem,1);
    listCollections();
}

function listCollections(){
    document.getElementById("listOptions").innerHTML = `<select name="toDoList" id="listOptions"></select>`;
    for (let i=0;i<listArray.length; i++) {
        document.getElementById("listOptions").innerHTML += `<option value="${[i]}">${listArray[i]}</option>`;      
    }
}

function unHide() {
    document.getElementById('inputCont').style.display = "inline";
}

function unHideEdit() {
    listEdit = document.getElementById("listOptions").value;
    document.getElementById("editInput").value = listArray[listEdit];
    document.getElementById('editCont').style.display = "inline";
}

function createTask() {
    let taskObject = {
        listName: "",
        taskName: "",
        finishBox: "No"
    }
    let listId = document.getElementById("listOptions").value;     
    taskObject.listName = listArray[listId];
    taskObject.taskName = document.getElementById("taskInput").value;
    taskArray.push(taskObject);
    document.getElementById("taskInput").value = "";
    taskCollection();
}

function editTask(taskIndex) {
    renameTask = document.getElementById(`editTask${taskIndex}`).value;
    taskArray[taskIndex] = renameTask;
    taskCollection();
}

function deleteTask(taskIndex) {
    taskArray.splice(taskIndex,1);
    taskCollection();
}

function taskCollection(){
    document.getElementById("taskList").innerHTML = `<ul id="taskList"></ul>`;
    let currentList = document.getElementById("listOptions").value;
    for (let i=0;i<taskArray.length; i++) {
        if (taskArray[i].listName==listArray[currentList]) {
            document.getElementById("taskList").innerHTML += 
            `<li>
                <input type="checkbox"/>
                <input type="test" value="${taskArray[i].taskName}"/>
                <span data-toggle="Edit" data-placement="top" title="Edit" onclick="editTask(${i})">
                    <i class="far fa-edit"></i></span>
                <span data-toggle="Delete" data-placement="top" title="Delete" onclick="deleteTask(${i})">  
                    <i class="far fa-trash-alt"></i></span>
                </li>`;      
        }
        
    }
}
 function deleteCompleted() {

 }