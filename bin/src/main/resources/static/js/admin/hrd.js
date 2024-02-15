/**
 * 
 */




$(document).ready(function() {
	let str = ''
	$.ajax({

		type: 'post',
		url: '/admin/hrd/memberTable',
		success: function(res) {
			console.table(res)
			for (let i in res) {

				let userId = res[i].userId
				let role = res[i].role

				str += userId + role + "</br>"

			}

			$('#memberTable').html(str)
		}
	})

})