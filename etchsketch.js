var pencolor = "red";
$(document).ready(function(){
	addSquares(16);

	$('#wrapper').on('mousedown',function(){
			$('#wrapper').on('mouseover','.square',function(){
				$(this).css('background-color',pencolor);
			});

	});

	$('input[name=clear]').click(function(){
		$('.square').css('background-color','#ddd');
	});

	$('input[name=reset]').click(function(){
		$('.square').remove();

		value = prompt("How many squares per line you want fam?\n(Don't say just fuck my shit up)");

		addSquares(value);
		$('.square').css("width",320/value);
		$('.square').css("height",320/value);
	});

});

function addSquares(value)
{
	for(i = 0; i < value*value;i++)
	{
		$('#wrapper').append('<div class="square"></div>');
	}
}