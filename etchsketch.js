$(document).ready(function(){
	addSquares(16);

	$(document).on('mouseover','.square',function(){
		$(this).css('background-color','yellow');
	});

	$('input[name=reset]').click(function(){
		$('.square').hide();

		value = prompt("How many squares per line you want fam?\n(Don't say just fuck my shit up)");

		addSquares(value);
		$('.square').css("width",320/value);
		$('.square').css("height",320/value);
	});

});

function addSquares(value)
{
	value*=value;
	for(i = 0; i < value;i++)
	{
		$('#wrapper').append('<div class="square"></div>');
	}
}