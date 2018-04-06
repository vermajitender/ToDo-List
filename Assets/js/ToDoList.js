//Uncheck or check over To-Do 
$("ul").on("click", "li", function()
	{
		$(this).toggleClass("completed");
	});

//To delete the ToDo on clicking span
$("ul").on("click", "span", function(event)
	{
		//Fade out li of clicked span
		$(this).parent().fadeOut(600, function()
			{
				//Delete that li 
				$(this).remove();
			});
		//Stop propagation of event to the parent if the same event is added to both 
		event.stopPropagation();
	});

//Toggle the input element on clicking plus
$("#toggle").click(function()
	{
		$("input[type = 'text']").fadeToggle();
		$(this).toggleClass("fa fa-plus");
		$(this).toggleClass("fa fa-check");
	});

//Add New ToDo to the list from input
$("input[type = 'text']").keypress(function(event)
	{
		//Check for return keypress
		if(event.which === 13)
		{
			//Add non-empty ToDo.
			if($.trim($(this).val()))
			{	
				//Grab the value from input
				var newToDo = $(this).val();
				//Set input to empty
				$(this).val("");
				//Add new li(todo) in the existing ul(list)
				$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
			}
		}	
	});