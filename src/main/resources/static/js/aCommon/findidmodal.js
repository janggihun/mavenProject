//모달 열기

const modal = document.getElementById("modal")
const findid = document.getElementById("findid")
findid.addEventListener("click", e => {
	modal.style.display = "flex"

})


const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
	modal.style.display = "none"
})