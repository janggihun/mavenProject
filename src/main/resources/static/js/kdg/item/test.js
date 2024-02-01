/**
 * 
 */
$(document).ready(function() {
	var tier = 'platinum'

	data = {

		"tier": tier

	}

	$.ajax({

		type: "POST",
		url: "/kdg/test",
		data: data,
		success: function(res) {

			console.log(res);

		}



	})

})

