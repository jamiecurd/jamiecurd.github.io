jQuery(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#EEEEEE');
	}, 3000);

	var isLateralNavAnimating = false;

//open/close lateral navigation
$('.cd-nav-trigger').on('click', function(event){
	event.preventDefault();
	//stop if nav animation is running
	if( !isLateralNavAnimating ) {
		if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

		$('body').toggleClass('navigation-is-open');
		$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//animation is over
			isLateralNavAnimating = false;
		});
	}
});

});
