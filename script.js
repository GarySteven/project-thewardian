// Navbar
$(function() {
    $("#navbar").load("navbar.html");
});

// Display date
// This was borrowed from a jsfiddle here: https://jsfiddle.net/2c8uogff/
function dateFunction() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var n = new Date();
    var today = n.getDay();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    document.getElementById("day").innerHTML = days[today];
    document.getElementById("date").innerHTML = d + " " + months[m] + " " + y;
}

// Blog post content
$(function() {
    $("#blog-item-0").load("blog-item-0.html");
});

$(function() {
    $("#blog-item-1").load("blog-item-1.html");
});

$(function() {
    $("#blog-item-2").load("blog-item-2.html");
});

$(function() {
    $("#blog-item-3").load("blog-item-3.html");
});

$(function() {
    $("#blog-item-4").load("blog-item-3.html");
});

$(function() {
    $("#blog-item-5").load("blog-item-3.html");
});
