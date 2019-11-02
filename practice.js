let listArray = ['General'];
console.log(listArray);
listArray.push('Admin');
console.log(listArray);
listArray.push('Errands');
console.log(listArray);
let test1 = document.getElementById("test1").checked;
console.log(test1);

function unHide() {
    document.getElementById("listInput").style.display = "block";
}
function createList() {   
    document.getElementById("listInput").innerHTML = "";
    listName = document.getElementById("listInput").value;
    listArray.push(listName);
    console.log(listArray);
}
let testArray = [];
function enterList(event) {
    let listTest;

    switch(event.which){
        case 13:
            listTest = document.getElementById("test3").value;
            
            testArray.push(listTest);
            console.log(testArray);
            document.getElementById("test3").value = "";
            break;
    } 
}



