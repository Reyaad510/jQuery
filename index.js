// "$" is jquery. Place the script tag above the javascript script in "index.html", or won't work properly bcuz browser read code from top to bottom so will try to process index.js and wouldnt have gotten to the jquery script yet. So has to be above it!S

// do below if jquery script is not at end of index.html!
/*
$(document).ready(function(){

    $("h1").css("color", "red");

})
*/


// Minifiy is when you take the jquery or other script and post in google and it has all the code not seperated and it helps reduce file size. Can use www.minifier.org to reduce any javascript or css file! Will help site load faster!



// Selecting elements with jQuery
// can select one element using below
$("h1.title")


// Can select multiple elements with writing the same way as below
// unlike where you had to do querySelectAll()
$("button")



// Manipulate styles with jQuery
// console.log(${("h1").css("font-size")})
//$("h1").css("color","green");


// adding class from styles.css to h1
// $("h1").addClass("big-title");


// remove class 
// $("h1").removeClass("big-title");


// adding multiple classes in one line
// $("h1").addClass("big-title margin-50");


// check if something has a class
// $("h1").hasClass("margin-50"); true/false


