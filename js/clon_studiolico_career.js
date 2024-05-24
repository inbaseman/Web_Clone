// 퍼블용 딸깍이
const GNB = document.querySelector('nav');
const FOOTER = document.querySelector('footer');
// const CREDITS = document.querySelector('.main_txt');
const CREDITS01 = document.querySelector('.pop01');
const CREDITS02 = document.querySelector('.pop02');

let menuButton = document.querySelector('.icoMenu');
menuButton.addEventListener('click', function () {
  GNB.classList.toggle("active");
  FOOTER.classList.toggle("active");
  // nav에 active 토글
  this.textContent = this.textContent === 'close' ? 'menu' : 'close';
  // 삼항연산자 사용하여 텍스트 변경, 아이콘의 모습이 바뀐다 
});

let diagram_center = document.querySelector('.diagram_center');
let center_txt = document.querySelectorAll('.center_txt');
let diagram_circle = document.querySelectorAll('.diagram_circle');
let circle_txt = document.querySelectorAll('.circle_txt');
console.log(diagram_center);
console.log(center_txt);



function Toggle_transition_opacity_arr(taget_name) {
  Array.from(taget_name).forEach((each) => {
    each.classList.toggle("transition_opacity");
  });
}

function Toggle_transition_opacity(taget_name) {
  taget_name.classList.toggle("transition_opacity");
}



setTimeout(() => {
  Toggle_transition_opacity(diagram_center);
}, 0);
setTimeout(() => {
  Toggle_transition_opacity_arr(center_txt);
}, 500);
setTimeout(() => {
  Toggle_transition_opacity_arr(diagram_circle);
}, 1000);
setTimeout(() => {
  Toggle_transition_opacity_arr(circle_txt);
}, 1500);

