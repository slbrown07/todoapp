let listArray = ['General'];
console.log(listArray);
listArray.push('Admin');
console.log(listArray);
listArray.push('Errands');
console.log(listArray);
let test1 = document.getElementById("test1").checked;
console.log(test1);
let test2 = document.getElementById("test2").checked;
console.log(test2);

function unHide() {
    document.getElementById("listInput").style.display = "block";
}
function createList() {   
    document.getElementById("listInput").innerHTML = "";
    listName = document.getElementById("listInput").value;
    listArray.push(listName);
    console.log(listArray);
}



