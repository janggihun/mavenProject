



$('#joinId').keyup(function() {

	let userId = $('#joinId').val()

	data = { 'userId': userId }

	$.ajax({

		type: 'post',
		url: '/test/ajax',
		data: data,
		success: function(result) {
			console.log(result)
			
			$('#tflag').html(result)
		}
	})




})



