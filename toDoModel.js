let myLists = new listCollection();

function listCollection() {
   this.list = ['General'];
   this.add = function(listName){
        this.collection.push(new (listName));
   } 
}

function club(name){ //ex task for each list
    this.name = name;
    this.collection = [];
    this.add = function(name, color){
        this.collection.push(new goblin(name, color));
    }
}

function goblin(name, color) { //ex of task item
    this.name = name;
    this.color = color;

}