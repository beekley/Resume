// to do:
// - correct stuttery slide
// - make starting setup pretty
// - Finish content



// Vertically center name function
function centerMain()
{
	$('#main').css({"top": $(document).height()/2 - $('#main').height()/2});
}

// Recenter on window resize
$(window).resize(function(){
	if($('.fullName').data("firstOpen"))
	{

	centerMain();	
	}
});

$(document).ready(function() 
{

	// Vertically center name
	centerMain();

	// Assign first open value to main class
	$('.fullName').data("firstOpen", true);

	$('li').each(function() 
	{
		if($(this).find('ul').length > 0)
		{
			//console.log($(this));
			$(this).css("margin-top","3px");
		};
	});

	// Slide to top when first opened
	$('.fullName').click(function()
	{
		// immediately hide clickme
		$('.clickMe').stop();
		$('.clickMe').hide();

		if($(this).data("firstOpen"))
		{
			$('.fullName').data("firstOpen", false);
			$('#main').animate({top: "0"}, 1000);	
		}

		//toggle footer
		$('#footer').delay(400).slideToggle(400);
	});

	// Display click me
	$('.fullName').hover(function() 
	{

		if($(this).data("firstOpen"))
		{
			console.log("this happened");
			$('.clickMe').delay(400).slideDown(500).delay(2000).slideUp(500);
		}

	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});


	$('li').find('p').click(function() 
	{
		
		if($(this).hasClass('fullName'))
		{
			$(this).parent().find('ul').first().slideToggle("slow");
		}
		else
		{
			$(this).parent().find('ul').first().slideToggle("fast", function() 
				{
					//console.log($(this).parent().find('ul').first().css("display"));

					if($(this).parent().find('ul').first().css("display") == "none")
					{
						//$(this).parent().find('p').last().css("margin-bottom","17px");
						//console.log("test"+$(this).parent());
					}
					else
					{
						$(this).parent().find('p').last().css("margin-bottom","0px");
					}
				}
			);
			
		};
		
		// If li has a closed ul, then give the li a margin-bottom
		
		

		/*if ( $(this).parent().find('ul').length > 0 && 
			$(this).parent().find('ul').first().is(":hidden")){

			$(this).parent().css("margin-bottom","8px");

		}
		else
		{
			$(this).parent().css("margin-bottom","0px");
		}*/	

	});

	$('li').find('p').hover(function() 
	{

		//$(this).parent().find('p').each(function(index, el) {
			
			$(this).data("text-decoration", $(this).css("text-decoration")); 

			if ( $(this).parent().find('ul').length > 0 )
			{

				$(this).css("text-decoration","underline");

				var textDecoration = $(this).data("text-decoration")

				if ( textDecoration == "underline" )
				{
					//$(this).css("text-decoration","none");
					$(this).css("display","inline");
					$(this).css("border-bottom","1px solid");

				};

			};

		//});
			

	}, function() 
	{

		if ( $(this).parent().find('ul').length > 0 )
		{

			//console.log(this);
			var textDecoration = $(this).data("text-decoration")
			//console.log(textDecoration);
			$(this).css("text-decoration",textDecoration);

			if ( textDecoration == "underline" )
			{
				$(this).css("border-bottom","none");
			}

		};

	});

	
});
