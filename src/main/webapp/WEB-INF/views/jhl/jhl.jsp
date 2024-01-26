<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>정혜린</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- css들어갈자리  -->
<link href="/css/jhl/champRank.css" rel="stylesheet">

</head>

<body>
	<%@include file="champRank.jsp"%>


	<!-- js들어갈자리  -->



</body>
<script type="text/javascript">
$('#champSearch').on('keyup', function () {
    let searchChamp = $('#champSearch').val();
	$('.champs').empty();
    $.ajax({
        type: "post",
        url: "/champSearch",
        data: { "champSearch": searchChamp},
        success: function (res) {
            let str1 = "<div class ='champImgItems'>";
            let str2 = "<div class ='se'>";
            let str3 = "<div class ='se_'> ";
            let str4 = "<span>s</span>";
            let str5 = "</div>";
            let str6 = "<div class ='champs'> ";
            let str7 = '';
			
           
            for (let i = 0; i < res.length; i++) {
                str7 += "<div class='champImgItem'><div class='cimgs'>";
                str7 += "<img width='48' height='48' src='https://ddragon.leagueoflegends.com/cdn/14.2.1/img/champion/" + res[i].champion_name + ".png' class='championImg'></div>";
            	
                str7 += "<span class ='champName'>" + res[i].champion_name_kr + "</span></div>";
            }
            
            let str8 = "</div>"
            let str9 = "</div>";
            let str10 = "</div>";

            $('.se').html(str2+str3+str4+str5+str6+str7+str8+str9)
           
        }
    });
});

</script>
</html>