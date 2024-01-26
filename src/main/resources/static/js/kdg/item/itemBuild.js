/**
 * 
 */

$(document).ready(function(){
	$('#anBtn').click(function(){
		$('#iron').show();
		$('#bronze').show();
		$('#silver').show();
		$('#gold').show();
		$('#platinum').show();
		$('#emerald').show();
		$('#diamond').show();
		$('#master').show();
		$('#grandmaster').show();
		$('#challenger').show();
		$('#anBtn').hide();
	})
})

function tier(c){
	
	
	var tier = c
	$('#tierCheck').html(tier);
	
	console.log(tier)
	
	str = "아이템 버전 : 14.01, 설정 티어 : "+tier+" <img src='../img/tier/"+tier+".png' style = 'width: 30px; height: 30px;'></img>, 라인 : all"
	
	$('#info22').html(str)	
	
}
		
//		$('#lineCheck').empty();
//		
//		var myChampName = $('#myChampName').text();
//		var enemyChampName = $('#enemyChampName').text();
//		console.log(myChampName);
//		console.log(enemyChampName);
//		
//		data = {
//			
//			"myChampName" : myChampName,
//			"enemyChampName" : enemyChampName
//			
//		}
//		$.ajax({
//			type : "POST",
//			url : "/kdg/test",
//			data : data,
//			success : function(res) {			
//				
//				console.log(res);
//				
//				str1 = "<div id = 'pickInfo'><br><h3>제일 많이 선택한 아이템 top3</h3>"
//				str2 = ''
//								
//				for (let i = 0; i < res.iList.length; i++){
//						str2 += "<img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res.iList[i].itemId+".png'></img><br>"
//						str2 += "<p><h1>아이템 이름 : "+res.iList[i].itemName+"</h1></p>"
//						str2 += "<p><h1>전체 픽 수 : "+res.cntList[i]+"게임</h1></p>"
//						str2 += "<p><h1>픽 수 : "+res.iList[i].itemPickCount+"게임</h1></p>"
//						str2 += "<p><h1>픽률 : "+((res.iList[i].itemPickCount/res.cntList[i])*100).toFixed(2)+"%</h1></p><br>"
//							
//					}
//				
//				str3 = '</div>'
//				
//				str4 = "<div id = 'winInfo'><br><h3>제일 많이 승리한 아이템 top3</h3>"
//				str5 = ''
//										
//				for (let j = 0; j < res.wList.length; j++){
//						str5 += "<img src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/item/"+res.wList[j].itemId+".png'></img><br>"
//						str5 += "<p><h1>아이템 이름 : "+res.wList[j].itemName+"</h1></p>"
//						str5 += "<p><h1>픽 수 : "+res.wList[j].itemPickCount+"게임</h1></p>"
//						str5 += "<p><h1>승리 수 : "+res.wList[j].myItemWinCount+"승</h1></p>"
//						str5 += "<p><h1>승률 : "+res.wList[j].myItemWinRate+"%</h1></p><br>"
//								
//					}
//				
//				str6 = '</div>'
//				
//				str7 = "<div id = 'rateInfo'><br><h3>승률</h3>"
//				str8 = ''
//												
//				for (let k = 0; k < res.cList.length; k++){
//					
//						str8 += "<div id = 'myChampInfo'>"
//						str8 += "<img res='"+res.cList[k].myChampName+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res.cList[k].myChampName+".png' width='72' height='72' alt='"+res.cList[k].myChampName+"' class='bg-image'></img><br>"
//						str8 += "<p><h1>"+res.cList[k].myChampName+"</h1></p>"
//						str8 += "<p><h1>"+res.cList[k].myWinRate+"%</h1></p>"
//						str8 += "<p><h1>"+res.cList[k].myChampWinCount+"승</h1></p></div>"
//										
//					}
//				
//				str9 = ''
//				
//				for (let m = 0; m < res.cList.length; m++){
//						str9 += "<div id = 'enemyChampInfo'>"
//						str9 += "<img res='"+res.cList[m].enemyChampName+"' src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/"+res.cList[m].enemyChampName+".png' width='72' height='72' alt='"+res.cList[m].enemyChampName+"' class='bg-image'></img><br>"
//						str9 += "<p><h1>"+res.cList[m].enemyChampName+"</h1></p>"
//						str9 += "<p><h1>"+(100-res.cList[m].myWinRate).toFixed(2)+"%</h1></p>"
//						str9 += "<p><h1>"+res.cList[m].enemyChampWinCount+"승</h1></p></div>"
//				}
//								
//				str10 = '</div>'
//									
//				$('.info').html(str1 + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9 + str10)				
//				$('.info').show();
//				$('#anBtn').hide();
//			}
//		})
//		
//		});
//	});	