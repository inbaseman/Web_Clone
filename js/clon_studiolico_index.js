const btn_scroll_down = document.querySelector('.btn_scroll_down');
const sec01 = document.querySelector('.sec01');
const sec02 = document.querySelector('.sec02');
const sec03 = document.querySelector('.sec03');
// console.log(btn_scroll_down);
// console.log(section_inner);


btn_scroll_down.addEventListener('click', function () {
  if (!sec01.classList.contains("blind")) {
    sec01.classList.add("blind");
    // sec01.classList.add("animate__animated animate__fadeOut animate__fast");
    // sec01.classList.remove("animate__animated animate__fadeInUp animate__fast");

    sec02.classList.remove("blind");
    // sec02.classList.add("animate__animated animate__fadeInUp animate__fast");
    // sec02.classList.remove("animate__animated animate__fadeOut animate__fast");

  } else if (!sec02.classList.contains("blind")) {
    sec02.classList.add("blind");
    // sec02.classList.add("animate__animated animate__fadeOut animate__fast");
    // sec02.classList.remove("animate__animated animate__fadeInUp animate__fast");

    sec03.classList.remove("blind");
    // sec03.classList.add("animate__animated animate__fadeInUp animate__fast");
    // sec03.classList.remove("animate__animated animate__fadeOut animate__fast");

  }
});

// if (sec01.classList.contains("blind") == ture) {
//   sec01.classList.add("animate__animated animate__fadeInUp animate__fast");
//   sec01.classList.remove("animate__animated animate__fadeOut animate__fast");
// } else {
//   sec01.classList.add("animate__animated animate__fadeOut animate__fast");
//   sec01.classList.remove("animate__animated animate__fadeInUp animate__fast");
// }

// if (sec02.classList.contains("blind") == ture) {
//   sec02.classList.add("animate__animated animate__fadeInUp animate__fast");
//   sec02.classList.remove("animate__animated animate__fadeOut animate__fast");
// } else {
//   sec02.classList.add("animate__animated animate__fadeOut animate__fast");
//   sec02.classList.remove("animate__animated animate__fadeInUp animate__fast");
// }

// if (sec03.classList.contains("blind") == ture) {
//   sec03.classList.add("animate__animated animate__fadeInUp animate__fast");
//   sec03.classList.remove("animate__animated animate__fadeOut animate__fast");
// } else {
//   sec03.classList.add("animate__animated animate__fadeOut animate__fast");
//   sec03.classList.remove("animate__animated animate__fadeInUp animate__fast");
// }

// function btn_activate() {
//   section_inner.classList.toggle("blind");

//   e.preventDefault();

//   if (!section_inner.classList.contains("blind")) {
//     section_inner.classList.add("blind");
//   } else {
//     section_inner.classList.remove("blind");
//   }
// }




