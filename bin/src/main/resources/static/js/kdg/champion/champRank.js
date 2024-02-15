/**
 * 
 */

$(document).ready(function() {

	i = 0;

	setInterval(function() {
		
		if (i == 0) {
			
			firstChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Brand.png'></img><p id = 'firstChampName'>브랜드</p>"
			$('#firstChamp').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Lillia.png'></img><p id = 'secondChampName'>릴리아</p>"
			$('#secondChamp').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Graves.png'></img><p id = 'thirdChampName'>그레이브즈</p>"
			$('#thirdChamp').html(thirdChamp)			
			
			i = i + 1;

		} else if (i == 1) {
			
			firstChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png'></img><p id = 'firstChampName'>트위스티드 페이트</p>"
			$('#firstChamp').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Katarina.png'></img><p id = 'secondChampName'>카타리나</p>"
			$('#secondChamp').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ekko.png'></img><p id = 'thirdChampName'>에코</p>"
			$('#thirdChamp').html(thirdChamp)			
			
			i = i + 1;

		} else if (i == 2) {
			
			firstChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MissFortune.png'></img><p id = 'firstChampName'>미스 포츈</p>"
			$('#firstChamp').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Jhin.png'></img><p id = 'secondChampName'>진</p>"
			$('#secondChamp').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Ezreal.png'></img><p id = 'thirdChampName'>이즈리얼</p>"
			$('#thirdChamp').html(thirdChamp)	
			
			i = i + 1;

		} else if (i == 3) {
			
			firstChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Maokai.png'></img><p id = 'firstChampName'>마오카이</p>"
			$('#firstChamp').html(firstChamp)
			
			secondChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Senna.png'></img><p id = 'secondChampName'>세나</p>"
			$('#secondChamp').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Bard.png'></img><p id = 'thirdChampName'>바드</p>"
			$('#thirdChamp').html(thirdChamp)
			
			i = i + 1;
			
		} else if (i == 4) {

			firstChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Trundle.png'></img><p id = 'firstChampName'>아트록스</p>"
			$('#firstChamp').html(firstChamp)

			secondChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Aatrox.png'></img><p id = 'secondChampName'>트런들</p>"
			$('#secondChamp').html(secondChamp)
			
			thirdChamp = "<img id = 'myChamp' src = 'https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Malphite.png'></img><p id = 'thirdChampName'>말파이트</p>"
			$('#thirdChamp').html(thirdChamp)
			
			i = 0;

		}



	}, 5000)

})