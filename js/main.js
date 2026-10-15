// 햄버거 메뉴 클릭
const hamburgerBtn = document.querySelector(".hamburger");
// console.log(hamburgerBtn);
const menu = document.querySelector(".menu");
// console.log(menu);

hamburgerBtn.addEventListener("click", () => {
  // 메뉴 열기 /닫기
  menu.classList.toggle("show");
});

//화면 변경시 메뉴 닫기
window.addEventListener("resize", () => {
  // window(전체의).이벤트를 적용시키다.
  // 'resize'사이즈를 변경할것
  menu.classList.remove("show");
});
