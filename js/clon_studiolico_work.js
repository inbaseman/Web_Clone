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

let creditButton01 = document.querySelector('.pop_btn01');
creditButton01.addEventListener('click', function () {
  // CREDITS.classList.toggle("active");
  CREDITS01.classList.toggle("active");
});
let closeButton01 = document.querySelector('.c_btn01');
closeButton01.addEventListener('click', function () {
  // CREDITS.classList.toggle("active");
  CREDITS01.classList.toggle("active");
});

let creditButton02 = document.querySelector('.pop_btn02');
creditButton02.addEventListener('click', function () {
  // CREDITS.classList.toggle("active");
  CREDITS02.classList.toggle("active");
});

let closeButton02 = document.querySelector('.c_btn02');
closeButton02.addEventListener('click', function () {
  // CREDITS.classList.toggle("active");
  CREDITS02.classList.toggle("active");
});








// 반응형 모바일에서 대메뉴 a를 클릭시, 링크기능 막고 하위메뉴 펼치기
let responsive = true;
window.addEventListener('resize', () => {
  let iw = window.innerWidth;
  let depth01 = document.querySelector('.menu > li > a');
  if (iw < 1024 && responsive) {
    depth01.addEventListener('click', function (e) {
      e.preventDefault(); // 기본기능 막기
    });
  } else {
    responsive = false;
  }
});