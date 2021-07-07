//$("h1").css("color","red");


//$("h1").addClass("big-title margin-50");


//$("h1").text("bye");
//$("button").html("<em>hey</em");  ->   //instead of innerHTML


//console.log($("img").attr("src")); -> //getting attribute value
// $("a").attr("href","https://www.youtube.com/"); -> //setting attribute value


// $("h1").click(function () {
                                    //-> Event Listerner
//   $("h1").css("color","pink");
// });



// $("button").click(function () {    //-> not using "for" loop for all the buttons
//    $("h1").css("color","pink");    
// });



// $("input").keydown(function(event)
// {                                    //-> keydown
// 	console.log(event.key);
// });



// $("input").keydown(function(event)
// {
// 	$("h1").text(event.key);
// });


// $("h1").on("mouseover",function(){   //-> more flexible way for events
// 	$("h1").css("color","pink");
// });


 // $("button").on("click",function(){   
	// $("h1").hide();
 // });


 // $("button").on("click",function(){   
	// $("h1").toggle();
 // });


 // $("button").on("click",function(){   
	// $("h1").fadeToggle();
 // });



 // $("button").on("click",function(){   
	// $("h1").slideUp/slideDown();
 // });
 // $("button").on("click",function(){   
	// $("h1").slideToggle();
 // });


 // $("button").on("click",function(){
 //    $("h1").animate({margin :"40px" });
 // });


 $("button").on("click",function(){
 	$("h1").slideUp().slideDown().animate({opacity : 0.5});
 });