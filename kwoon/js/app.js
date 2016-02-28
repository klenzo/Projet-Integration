$(function () {

	//$('#slippry-demo').slippry();
	$('.toggleMenu').click(function() {
		$('.menuNav').toggleClass('menuNavMobile');
	});

	setInterval(function(){
         $(".miniSlideshow ul").animate({marginLeft:-350},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
     }, 3500);




	nbrSlid = 3;
	setInterval(function(){ slider(nbrSlid); }, 5000);
	idSlid = 1; idSlidPrev = 3; idSlidNext = 2;
	function slider(nbrSlid) {
		idSlid     = idSlid + 1;
		idSlidNext = idSlid + 1;
		idSlidPrev = idSlid - 1;
		if( idSlid === nbrSlid+1 ){ idSlid = 1; idSlidPrev = 3; idSlidNext = 2; }

		$('.slid').fadeOut('slow');
		$('.bubbleSlid span').removeClass('active');
		$('.slid.slider'+idSlid).fadeIn('slow');
		$('.bubbleSlid #slider'+idSlid).addClass('active');
	}


	$('.commandSlider').click(function() {
		idSlid     = idSlid + 1;
		idSlidNext = idSlid + 1;
		idSlidPrev = idSlid - 1;
		typeBtn = $(this).attr('id');

		if(typeBtn === 'prevSlid'){ console.log('Precedent'); }else{ console.log('Suivant'); }
		if( idSlid === nbrSlid+1 ){ idSlid = 1; idSlidPrev = 3; idSlidNext = 2; }

		$('.slid').fadeOut('slow');
		$('.slid.slider'+idSlid).fadeIn('slow');
		$('.timeline').css('width', '0%');
	});
});