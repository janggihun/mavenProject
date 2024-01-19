



$('#userId1').keyup(function() {

	let userId = $('#userId1').val()

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



