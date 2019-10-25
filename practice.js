let listArray = ['General'];
console.log(listArray);
listArray.push('Admin');
console.log(listArray);
listArray.push('Errands');
console.log(listArray);

function unHide() {
    document.getElementById("listInput").style.display = "block";
}
function createList() {   
    document.getElementById("listInput").innerHTML = "";
    listName = document.getElementById("listInput").value;
    listArray.push(listName);
    console.log(listArray);
}



