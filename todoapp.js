let myDate = new Date();
let listArray = ['General'];
console.log(listArray);

(function () {
    document.getElementById('myCurDate').innerHTML += myDate.toDateString();
    listCollections();
})();

function createList() {     
    listName = document.getElementById("listInput").value;
    listArray.unshift(listName);
    document.getElementById("listInput").value = "";
    document.getElementById("inputCont").style.display = "none";
    listCollections();
}

function listCollections(){
    document.getElementById("listOptions").innerHTML = `<select name="toDoList" id="listOptions"></select>`;
    for (let i=0;i<listArray.length; i++) {
        document.getElementById("listOptions").innerHTML += `<option value="${[i]}">${listArray[i]}</option>`;      
    }
}

function unHide() {
    document.getElementById("inputCont").style.display = "inline";
}

function deleteList() {
    deleteItem = document.getElementById("listOptions").value;
    listArray.splice(deleteItem,1);
    listCollections();
}

