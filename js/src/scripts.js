$(function(){

	$('form#awesome-form .input-group input').focusout(function() {
		
		var inputContent = $(this).val();

		if ( inputContent != '' ) {
			$(this).addClass('has-content');
		} else {
			$(this).removeClass('has-content');
		}

	});

})