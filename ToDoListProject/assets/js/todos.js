// Check Off Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

  // Click on X to delete to do
  $("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
    // stopPropagations stops the bubbling of events
    event.stopPropagation();
  });

  $("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new LI and add to UL
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>")
    }    
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});

  // All this code replaces by one class and toggle method
  // If Li is gray turn it black
  // if ($(this).css("color") === "rgb(128, 128, 128)") {
  //     $(this).css({
  //         color: "black",
  //         textDecoration: "none"
  //     });

  // } else {
  //     // Else turn it gray
  //     $(this).css({
  //         color: "gray",
  //         textDecoration: "line-through"
  //     });
  // }
