var nine = localStorage.getItem("9AM") || "";
var ten = localStorage.getItem("10AM") || "";
var eleven = localStorage.getItem("11AM") || "";
var twelve = localStorage.getItem("12PM") || "";
var one = localStorage.getItem("1PM") || "";
var two = localStorage.getItem("2PM") || "";
var three = localStorage.getItem("3PM") || "";
var four = localStorage.getItem("4PM") || "";
var five = localStorage.getItem("5PM") || "";


function fill() {
    $("#9AM").children(".input").val(nine);
    $("#10AM").children(".input").val(ten);
    $("#11AM").children(".input").val(eleven);
    $("#12PM").children(".input").val(twelve);
    $("#1PM").children(".input").val(one);
    $("#2PM").children(".input").val(two);
    $("#3PM").children(".input").val(three);
    $("#4PM").children(".input").val(four);
    $("#5PM").children(".input").val(five);
};