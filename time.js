function displaytime() {
    // alert("vhddgv");
    var d = new Date();
    var n = d.getDay();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var meridiem = hr >= 12 ? "PM" : "AM";
    document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec + " " + meridiem;
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    document.getElementById("date").innerHTML = day + "/" + month + "/" + year;



}