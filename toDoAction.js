let myDate = new Date();
console.log(myDate);

(function () {
    document.getElementById("myCurDate").innerHTML += myDate.toDateString();
})();
