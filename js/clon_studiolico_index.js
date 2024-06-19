// const btn_scroll_down = document.querySelector('.btn_scroll_down');
const swiper_button_next = document.querySelector('.swiper-button-next');
const sec01 = document.querySelector('.sec01');
const sec02 = document.querySelector('.sec02');
const sec03 = document.querySelector('.sec03');
const sec01_main = document.querySelector('.sec01_main');
const sec01_sub = document.querySelector('.sec01_sub');
const sec01_link = document.querySelector('.sec01_link');
const sec02_main = document.querySelector('.sec02_main');
const sec02_sub = document.querySelector('.sec02_sub');
const sec02_link = document.querySelector('.sec02_link');
const sec03_main = document.querySelector('.sec03_main');
const sec03_sub = document.querySelector('.sec03_sub');
const sec03_link = document.querySelector('.sec03_link');


const no1 = document.querySelector('.no1');
const no2 = document.querySelector('.no2');
const no3 = document.querySelector('.no3');
const no4 = document.querySelector('.no4');
const no5 = document.querySelector('.no5');
const no6 = document.querySelector('.no6');
const no7 = document.querySelector('.no7');
const no8 = document.querySelector('.no8');
const no9 = document.querySelector('.no9');
const swiper_slide = document.querySelector('.sec');




// sec01_main.classList.add("animate__animated");
// sec01_main.classList.add("animate__fadeInUp");

// sec01_sub.classList.add("animate__animated");
// sec01_sub.classList.add("animate__fadeInUp");

// sec01_link.classList.add("animate__animated");
// sec01_link.classList.add("animate__fadeInUp");


// swiper_button_next.addEventListener('click', function () {
//   if (!sec01.classList.contains("blind")) {

//     sec01.classList.add("animate__animated");
//     sec01.classList.add("animate__fadeOut");

//     setTimeout(() => {
//       sec01.classList.add("blind");
//       sec01_main.classList.add("blind");
//       sec01_sub.classList.add("blind");
//       sec01_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec02.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec02_main.classList.remove("blind");
//       sec02_main.classList.add("animate__animated");
//       sec02_main.classList.add("animate__fadeInUp");
//       sec02_sub.classList.remove("blind");
//       sec02_sub.classList.add("animate__animated");
//       sec02_sub.classList.add("animate__fadeInUp");
//       sec02_link.classList.remove("blind");
//       sec02_link.classList.add("animate__animated");
//       sec02_link.classList.add("animate__fadeInUp");
//     }, 800);

//   } else if (!sec02.classList.contains("blind")) {

//     sec02.classList.add("animate__animated");
//     sec02.classList.add("animate__fadeOut");
//     setTimeout(() => {
//       sec02.classList.add("blind");
//       sec02_main.classList.add("blind");
//       sec02_sub.classList.add("blind");
//       sec02_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec03.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec03_main.classList.remove("blind");
//       sec03_main.classList.add("animate__animated");
//       sec03_main.classList.add("animate__fadeInUp");
//       sec03_sub.classList.remove("blind");
//       sec03_sub.classList.add("animate__animated");
//       sec03_sub.classList.add("animate__fadeInUp");
//       sec03_link.classList.remove("blind");
//       sec03_link.classList.add("animate__animated");
//       sec03_link.classList.add("animate__fadeInUp");
//     }, 800);

//   } else if (!sec03.classList.contains("blind")) {

//     sec03.classList.add("animate__animated");
//     sec03.classList.add("animate__fadeOut");
//     setTimeout(() => {
//       sec03.classList.add("blind");
//       sec03_main.classList.add("blind");
//       sec03_sub.classList.add("blind");
//       sec03_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec01.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec01_main.classList.remove("blind");
//       sec01_main.classList.add("animate__animated");
//       sec01_main.classList.add("animate__fadeInUp");
//       sec01_sub.classList.remove("blind");
//       sec01_sub.classList.add("animate__animated");
//       sec01_sub.classList.add("animate__fadeInUp");
//       sec01_link.classList.remove("blind");
//       sec01_link.classList.add("animate__animated");
//       sec01_link.classList.add("animate__fadeInUp");
//     }, 800);
//   }
// });



// btn_scroll_down.addEventListener('click', function () {
//   if (!sec01.classList.contains("blind")) {

//     sec01.classList.add("animate__animated");
//     sec01.classList.add("animate__fadeOut");

//     setTimeout(() => {
//       sec01.classList.add("blind");
//       sec01_main.classList.add("blind");
//       sec01_sub.classList.add("blind");
//       sec01_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec02.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec02_main.classList.remove("blind");
//       sec02_main.classList.add("animate__animated");
//       sec02_main.classList.add("animate__fadeInUp");
//       sec02_sub.classList.remove("blind");
//       sec02_sub.classList.add("animate__animated");
//       sec02_sub.classList.add("animate__fadeInUp");
//       sec02_link.classList.remove("blind");
//       sec02_link.classList.add("animate__animated");
//       sec02_link.classList.add("animate__fadeInUp");
//     }, 800);

//   } else if (!sec02.classList.contains("blind")) {

//     sec02.classList.add("animate__animated");
//     sec02.classList.add("animate__fadeOut");
//     setTimeout(() => {
//       sec02.classList.add("blind");
//       sec02_main.classList.add("blind");
//       sec02_sub.classList.add("blind");
//       sec02_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec03.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec03_main.classList.remove("blind");
//       sec03_main.classList.add("animate__animated");
//       sec03_main.classList.add("animate__fadeInUp");
//       sec03_sub.classList.remove("blind");
//       sec03_sub.classList.add("animate__animated");
//       sec03_sub.classList.add("animate__fadeInUp");
//       sec03_link.classList.remove("blind");
//       sec03_link.classList.add("animate__animated");
//       sec03_link.classList.add("animate__fadeInUp");
//     }, 800);

//   } else if (!sec03.classList.contains("blind")) {

//     sec03.classList.add("animate__animated");
//     sec03.classList.add("animate__fadeOut");
//     setTimeout(() => {
//       sec03.classList.add("blind");
//       sec03_main.classList.add("blind");
//       sec03_sub.classList.add("blind");
//       sec03_link.classList.add("blind");
//     }, 1000);


//     setTimeout(() => {
//       sec01.classList.remove("blind");
//     }, 800);
//     setTimeout(() => {
//       sec01_main.classList.remove("blind");
//       sec01_main.classList.add("animate__animated");
//       sec01_main.classList.add("animate__fadeInUp");
//       sec01_sub.classList.remove("blind");
//       sec01_sub.classList.add("animate__animated");
//       sec01_sub.classList.add("animate__fadeInUp");
//       sec01_link.classList.remove("blind");
//       sec01_link.classList.add("animate__animated");
//       sec01_link.classList.add("animate__fadeInUp");
//     }, 800);
//   }
// });


