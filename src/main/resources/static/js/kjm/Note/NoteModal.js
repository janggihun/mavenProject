//모달 열기

const modal = document.getElementById("modal")
const modal_wrap = document.getElementById("modal_wrap")
modal_wrap.addEventListener("click", e => {
	console.log(e);
    modal.style.display = "flex"
})

//모달 닫기

const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})