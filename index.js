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






// Manipulate Text with jQuery

// change text of element
//$("h1").text("Bye");

// change text of all buttons
//$("button").text("Don't click Me");


// ".html" will change the text inside of all buttons to "italics" as opposed to using ".text"
//$("button").html("<em>Hey</em>")







// Manipulate Attributes with jQuery

// console.log($("img").attr("src"));

// $("a").attr("href", "www.google.com")

// $("h1").attr("class"); -> "big-title margin-50"



// Adding event listeners with jQuery

/* 

Below is the same as the jQuery below it. jQuery you don't need the for loop
for(let i = 0; i < 5; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(){

        document.querySelector("h1").style.color = "purple";

    })

}
*/


// when click button it changes h1 color to purple
/*
$("button").click(function(){

    $("h1").css("color", "purple");

})
*/

/*
$("body").keypress(function(event){
    console.log(event.key);
})
*/

/*
$("body").keydown(function(event){
    $("h1").text(event.key);
})
*/

/*
$("h1").on("mouseover",function(){
    $("h1").css("color", "purple");
});
*/







// Adding and Removing Elements with jQuery
// before, after, prepend, append

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>"); // add inside <h1> but before the text
// $("h1").append("<button>New</button>"); // add inside <h1> but right before </h1> after the text


// Removes all current buttons
// $("button").remove();




// Website Animations with jQuery


// when click any button will hide "h1"

$("button").on("click", function(){

   // $("h1").hide();
    
    // to show h1 
   // $("h1").show();

    // toggle on and off
    //$("h1").toggle();

    /* fades
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();
    */

    /* Collapse element
    $("h1").slideDown();
    $("h1").slideUp();
    $("h1").slideToggle();
    */


    // .animate, must stick to things with numerical values
   //  $("h1").animate({opacity: 0.5});

    // $("h1").animate({color: red}); will not work cuz no number value


    
    // can chain animation
    $("h1").slideUp().slideDown().animate({opacity: 0.5});

})
