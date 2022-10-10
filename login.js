const modalOpenBtn = document.querySelector(".login-openModalbtn");
const modal = document.getElementById("modalwrapper");
const modalCloseBtn = document.querySelector(".modal-closeBtn");

// 로그인 버튼 누르면 모달 열기
function toggleModalActivation() {
    modal.classList.toggle("hidden");
}
modalOpenBtn.addEventListener("click",toggleModalActivation);

// 닫기 버튼 누르면 모달 닫기
modalCloseBtn.addEventListener("click",toggleModalActivation);

