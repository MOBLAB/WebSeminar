$(document).ready(function() {
	$('#btn-alert').click(function(){
		alert("Hello, World!");
	});

	$('#btn-clear').click(function(){
		$('#msg').html('[ This is a message container ]');
	});

	$('#btn-send').click(function(){
		var msg = $('#msg').html() + "<br/>" 
			+ $('#input-user').val() +  " : " + $('#input-msg').val();
		$('#msg').html(msg);
		$('#input-msg').val('');
		$('#msg').scrollTop($('#msg')[0].scrollHeight);
	});
});