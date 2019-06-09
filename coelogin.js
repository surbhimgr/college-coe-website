


$(document).ready(function(){ 		
	const NUMBER_OF_SLIDES = 6;
	var slide_width = document.getElementById('slideshow').scrollWidth / NUMBER_OF_SLIDES; 
	var slide_number = 1;		
	setInterval(function(){
		if (slide_number < NUMBER_OF_SLIDES){
			//move to next slide
			$("#slideshow").animate({
				scrollLeft: slide_width * slide_number
			},500);					
			slide_number++;	
		}else{
			//go to the first slide
			$("#slideshow").animate({
				scrollLeft: 0
			},500);
			slide_number = 1;
		}

	}, 4500);	
});