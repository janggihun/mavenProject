$('#app').hide()
rouletteInfo()
energyStart()


// 룰렛 이벤트 클릭 버튼
$('#rouletteStart').on("click", function() {


	let rouletteCount = rouletteInfo()

	if (rouletteCount > 0) {

		minusRoulette()
		$('#app').show()
		$('#rouletteStart').hide()
		rouletteF()
		if (rouletteCount == 5) {
			energyStart()
		}

	} else {
		alert("룰렛 에너지가 부족합니다.")
	}


})


function rouletteF() {
	var rolLength = 6; // 해당 룰렛 콘텐츠 갯수
	var setNum; // 랜덤숫자 담을 변수
	var hiddenInput = document.createElement("input");
	hiddenInput.className = "hidden-input";
	//랜덤숫자부여

	var min = Math.ceil(0);
	var max = Math.floor(rolLength - 1);
	var randamNum = Math.floor(Math.random() * (max - min)) + min;

	// 해당 룰렛 콘텐츠 갯수
	// 랜덤숫자 담을 변수
	var panel = document.querySelector(".rouletter-wacu");
	var btn = document.querySelector(".rouletter-btn");
	var deg = [];
	// 룰렛 각도 설정(rolLength = 6)

	for (var i = 1, len = rolLength; i <= len; i++) {
		deg.push((360 / len) * i);
	}

	// 랜덤 생성된 숫자를 히든 인풋에 넣기
	var num = 0;
	document.body.append(hiddenInput);
	setNum = hiddenInput.value = randamNum;

	// 애니설정
	var ani = setInterval(() => {
		num++;
		panel.style.transform = "rotate(" + 360 * num + "deg)";
		btn.disabled = true; //button,input
		btn.style.pointerEvents = "none"; //a 태그

		// 총 50에 다달했을때, 즉 마지막 바퀴를 돌고나서
		if (num === 50) {
			clearInterval(ani);
			panel.style.transform = `rotate(${deg[setNum]}deg)`;
			setTimeout(function() {
				switch (setNum) {
					case 1:
						alert("당첨!! 스타벅스 아메리카노");
						$('#app').hide()
						$('#rouletteStart').show()
						break;
					case 3:
						alert("당첨!! 햄버거 세트 교환권");
						$('#app').hide()
						$('#rouletteStart').show()
						break;
					case 5:
						alert("당첨!! CU 3,000원 상품권");
						$('#app').hide()
						$('#rouletteStart').show()
						break;
					default:
						alert("꽝! 다음기회에");
						$('#app').hide()
						$('#rouletteStart').show()
				}
			}, 2000);
		}

	}, 50);
}



// roulette default
document.getElementById("app").innerHTML = `
<div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn" id = "rouletteStart" >start</button>
</div>
`;



////
function energyStart() {

	let rouletteCount = rouletteInfo()
	$('#roulette').text(rouletteCount + "번");
	if (rouletteCount < 5) {

		setTimeout(function() {
			z = 1; // 퍼센트
			var elem = document.getElementById("progress-bar");
			var width = 0;
			var id = setInterval(frame, 50);

			function frame() {
				if (width >= 100) {
					clearInterval(id);
					addRoulette()
					rouletteCount = rouletteInfo()
					energyStart()

				} else {
					width++;
					elem.style.width = width + "%";
					elem.innerHTML = width + "%";
				}
			}

		}, 1000);

	} else {



	}
}


function addRoulette() {

	$.ajax({
		type: 'post',
		url: '/member/addRoulette',
		success: function(res) {

			$('#roulette').text(res.rouletteCount + "번");

		}
	})
}

function minusRoulette() {

	$.ajax({
		type: 'post',
		url: '/member/minusRoulette',
		success: function(res) {

			$('#roulette').text(res.rouletteCount + "번");

		}
	})
}
function rouletteInfo() {
	let a = 0;
	$.ajax({
		type: 'post',
		url: '/member/rouletteInfo',
		async: false,
		success: function(res) {
			a = res.rouletteCount
			$('#roulette').text(a + "번");
		}
	})

	return a;
}