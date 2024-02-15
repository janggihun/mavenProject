<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>김윤태</title>
<!-- CSS -->
<style>
        body {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-image: url('');
            background-size: cover;
            background-repeat: no-repeat;
            color: #ffffff;
            margin: 0;
            position: relative; /* 추가: 상대 위치 설정 */             
        }

        .button-container {
            background-color: rgba(173, 216, 230, 0.7);
            padding: 10px;
            display: inline-block;
            margin-top: 10px;
        }

        .button-container button {
            margin: 5px;
        }

        .dragon-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            margin-top: 20px;
        }

        .dragon-images-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 20px;
        }

        .dragon-images-container img {
            width: 120px;
            height: auto;
            margin-right: 10px;
            cursor: pointer;
        }

        .dragon-details {
            max-width: 45%;
            width: 150%;
            text-align: left;
            background-color: rgba(169, 169, 169, 0.7); /* 회색 반투명 배경색 */
            color: black; /* 흰색 글자색 */
            padding: 20px;
            border-radius: 10px;
            box-sizing: border-box;
            position: relative; 
        }

        /* 추가된 스타일 */
        #dragonChartsContainer {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }

        .dragon-chart-canvas {
            max-width: 150px; /* 수정: 차트 크기 키우기 */
            width: 100%;
        }
    </style>

    <!-- Chart.js 추가 -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

    <!-- Header JSP 포함 -->
    <%@include file="../inc/header.jsp"%>

    <!-- 버튼 가운데 정렬 -->
    <div class="button-container">
        <button onclick="location.href='home.jsp'">Home</button>
        <button onclick="location.href='about.jsp'">About</button>
        <button onclick="location.href='services.jsp'">Services</button>
    </div>

    <!-- 드래곤 이미지 및 차트 표시 -->
    <div class="dragon-container">
        <!-- 드래곤 이미지 표시 -->
        <div class="dragon-images-container">
            <img src="img/kyt/바람.png" alt="Dragon 1" onclick="showDetails('바람')">	
            <img src="img/kyt/대지.png" alt="Dragon 2" onclick="showDetails('대지')">
            <img src="img/kyt/화염.png" alt="Dragon 3" onclick="showDetails('화염')">
            <img src="img/kyt/바다.png" alt="Dragon 4" onclick="showDetails('바다')">
            <img src="img/kyt/마법공학.png" alt="Dragon 5" onclick="showDetails('마법공학')"> 
            <img src="img/kyt/화학공학.png" alt="Dragon 6" onclick="showDetails('화학공학')">
        </div>

        <!-- 드래곤 상세 정보 -->
        <div id="dragonDetails" class="dragon-details">
            <h3>선택한 드래곤 설명:</h3>
            <img id="dragonImage" src="" alt="Selected Dragon">
            <p id="dragonDescriptionText"></p>
            <p id="dragonAbilityText"></p>
            <p id="dragonSoulText"></p>
            <button onclick="hideDetails()">Close</button>
        </div>
    </div>

    <!-- 그래프를 그릴 캔버스 요소 추가 -->
    <div id="dragonChartsContainer" class="dragon-charts-container"></div>

    <!-- Footer JSP 포함 -->
    <%@include file="../inc/footer.jsp"%>

    <!-- JS -->
    <script type="text/javascript">
        document.addEventListener('click', function(event) {
            var dragonDetails = document.getElementById('dragonDetails');
            if (dragonDetails.style.display === 'block'
                && !event.target.closest('.dragon-details')
                && !event.target.closest('.dragon-images-container')) {
                dragonDetails.style.display = 'none';
            }
        });

        function showDetails(dragonType) {
            var descriptionText = getDragonDescription(dragonType);
            var abilityText = getDragonAbility(dragonType);
            var soulText = getDragonSoul(dragonType);
            var dragonImageSrc = getDragonImageSrc(dragonType);
            var winRateData = getAllWinRateData();

            document.getElementById('dragonDescriptionText').innerText = descriptionText;
            document.getElementById('dragonAbilityText').innerText = "능력: " + abilityText;
            document.getElementById('dragonSoulText').innerText = "영혼: " + soulText;
            document.getElementById('dragonImage').src = dragonImageSrc;

            var dragonDetails = document.getElementById('dragonDetails');
            dragonDetails.style.display = 'block';
            // 차트 그리기
            drawWinRateChart('dragonChart', winRateData);

            // 추가: 드래곤 설명창 위치 조정
            adjustDragonDetailsPosition();
        }   

		function getDragonDescription(dragonType) {
			switch (dragonType) {
			case '바람':
				return '바람의 드래곤은 다른 드래곤들과 다르게 공격 속도가 1으로, 타 용들보다 2배 빠르다. 대신 공격력이 35으로 화염, 바다 용의 절반이고, 단일 대상 공격이다. 버프 효과와 더불어서 게임 초반에 바람용을 더욱 기피하게 만드는 요소. 겉보기에는 DPS가 동일해 보이지만 실제로는 드래곤의 공격에는 기본적으로 현재 체력의 7%에 해당하는 온힛 데미지가 있기 때문에 DPS가 다른 용보다 높아 초반에 잡기 가장 어려운 용이다.';
			case '대지':
				return '대지의 드래곤은 공격 속도가 화염이나 바다의 드래곤의 절반인 0.25이다. 대신 공격력은 그들의 1.5배인 105이며, 기본 공격이 범위 피해를 입힌다. DPS는 다른 드래곤들의 75%에 불과하지만, 대신 체력과 방어력 및 마법 저항력이 다른 드래곤에 비해 높다. 때문에 실질적으로 드래곤을 잡는 데 받는 총 피해량은 다른 드래곤들보다 조금 낮은 수준이며, 잡는 시간이 오래 걸리기 때문에 초반에 몰래 솔용을 시도하는 데 가장 리스크가 큰 드래곤이다.';
			case '화염':
				return '화염의 드래곤의 공격 속도는 0.5, 공격력은 70이다. 또한 기본 공격이 대상 뒤의 부채꼴 모양 범위 내의 적들에게 광역 피해를 입힌다. 솔용 시에는 바람의 드래곤보다 체력 관리가 용이하나, 초반에 바텀 라이너들과 정글러가 함께 옹기종기 모여서 화염용을 사냥할 때는 광역 피해가 거슬리는 요소로 작용한다. 때문에 화염용을 잡을 때는 서로 다른 방향에 서서 광역 피해를 받지 않도록 유도하는 것이 좋다.';
			case '바다':
				return '바다의 드래곤의 공격 속도는 0.5, 공격력은 70이다. 또한 기본 공격은 단일 대상 공격이며, 적중 대상에게 2초 동안 30%의 둔화 효과를 부여한다. 때문에 상대 팀의 방해 없이 드래곤을 사냥할 경우 가장 잡기 쉬운 드래곤은 바다용이다. 그러나 바다용 앞에서 교전이 벌어질 경우, 바다용의 기본 공격에 묻는 둔화 효과가 변수를 창출할 수도 있다. 또한 몰래 솔용을 시도하다가 적에게 발각될 경우 둔화 때문에 도주하기 힘들어지기에, 상대 팀의 방해가 있을 경우 바다용은 가장 잡기 어려운 드래곤이 된다.';
			case '마법공학':
				return '마법공학 드래곤은 기본 공격 속도와 대미지가 높고, 4번째 공격마다 본인의 영혼 효과와 동일하게 연쇄 번개로 광역 피해를 입히고 둔화시킨다. 모든 평타가 둔화인 바다의 드래곤만큼은 아니지만 은근히 처치하기 까다로운 드래곤.';
			case '화학공학':
				return '화학공학 드래곤은 드래곤의 현재 체력이 낮을수록 공격 속도가 빨라진다. 따라서 다수가 빠르게 드래곤을 먹고 빠지는 버스트 상황에서는 문제가 되지 않으나 이른 시간에 혼자 드래곤을 사냥하는 상황에서는 가장 잡기 어려운 드래곤이다. 다른 용이라면 분명 잡는 견적임에도 불구하고 사냥하다 처형당하기 일수.';
			default:
				return '';
			}
		}

		function getDragonAbility(dragonType) {
			// 각 드래곤의 능력을 리턴하는 코드를 추가
			switch (dragonType) {
			case '바람':
				return '둔화 저항과 전투에서 벗어나 있을 때 이동 속도 +5/10/15/20%';
			case '대지':
				return '방어력 및 마법 저항력 +5/10/15/20%.';
			case '화염':
				return '중첩마다 3%의 공격력 및 주문력을 얻습니다.';
			case '바다':
				return '매 5초마다 잃은 체력의 2/4/6/8% 회복.';
			case '마법공학':
				return '중첩마다 5의 스킬 가속 및 5%의 공격 속도 효과를 얻습니다.';
			case '화학공학':
				return '중첩마다 6%의 강인함 및 6%의 체력 회복 및 보호막 효과를 얻습니다.';
			default:
				return '';
			}
		}

		function getDragonSoul(dragonType) {
			// 각 드래곤의 영혼을 리턴하는 코드를 추가
			switch (dragonType) {
			case '바람':
				return '기본 지속 효과로 이동 속도가 20% 증가합니다. 궁극기를 사용하면 이동 속도가 6초간 추가로 50% 증가합니다. (재사용 대기시간 30초)';
			case '대지':
				return '5초 동안 피해를 입지 않으면 220 (+추가 공격력의 16%) (+주문력의 13%) (+추가 체력의 13%)의 피해를 흡수하는 보호막을 획득.';
			case '화염':
				return '3초마다 다음 기본 공격 또는 공격 스킬이 작은 광역 폭발을 일으켜 대상과 주변 적들에게 100 (+추가 공격력의 18%) (+주문력의 12%) (+추가 체력의 2%)의 적응형 피해를 입힙니다';
			case '바다':
				return '적 챔피언에게 피해를 입히면 4초에 걸쳐 150 (+추가 공격력의 25%) (+주문력의 15%) (+추가 체력의 7%)의 체력 및 100 (+최대 마나의 2.5%)의 마나를 회복합니다. 미니언 또는 몬스터에게 피해를 입히면 해당 회복 효과의 30%가 발동됩니다.';
			case '마법공학':
				return '8초마다 기본 공격이나 스킬로 적에게 피해를 입히면 번개를 발사해 25 (+레벨) 의 피해를 입히고 근거리 적과 원거리 적을 각각 45/35% (+추가 공격력 100당 3%) (+주문력 100당 1%) (+추가 체력 1000당 1%) 둔화하며 둔화 효과는 2초에 걸쳐 사라집니다. 이후 번개는 근처 4명의 적에게 날아가 같은 피해를 주고 둔화 효과를 적용합니다.다른 대상에게 받은 둔화 효과는 중첩되며, 원거리 적을 공격하면 둔화 효과가 더 느리게 해제됩니다.';
			case '화학공학':
				return '체력이 50% 이하일 때 주는 피해가 11% 증가하고 받는 피해가 11% 감소합니다.';
			default:
				return '';
			}
		}

		function getDragonImageSrc(dragonType) {
			// 각 드래곤 이미지의 경로를 리턴하는 코드를 추가
			switch (dragonType) {
			case '바람':
				return 'img/kyt/바람드래곤.png';
			case '대지':
				return 'img/kyt/대지드래곤.png';
			case '화염':
				return 'img/kyt/화염드래곤.png';
			case '바다':
				return 'img/kyt/바다드래곤.png';
			case '마법공학':
				return 'img/kyt/마법드래곤.png';
			case '화학공학':
				return 'img/kyt/화학드래곤.png';
			default:
				return '';
			}
		}
        function getAllWinRateData() { //임시 >> 실시간 데이터 변경예정
            return [60, 50, 45, 55, 70, 48]; // 각 드래곤의 승률 데이터 배열
        }

        function drawWinRateChart(canvasId, winRateData) {
            var ctx = document.createElement('canvas').getContext('2d');
            ctx.canvas.id = canvasId;
            ctx.canvas.classList.add('dragon-chart-canvas'); // 수정: 스타일 클래스 추가
            document.getElementById('dragonChartsContainer').innerHTML = ''; // 기존 차트 삭제
            document.getElementById('dragonChartsContainer').appendChild(ctx.canvas);

            var data = {
                labels: ['Win Rate', 'Lose Rate'],
                datasets: [{
                    data: winRateData,
                    backgroundColor: ['#36A2EB', '#FF6384'],
                    hoverBackgroundColor: ['#36A2EB', '#FF6384']
                }]
            };
            var options = {
                responsive: true,
                legend: {
                    display: false,
                }
            };
            var pieChart = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: options
            });
        }
    </script>

</body>
</html>