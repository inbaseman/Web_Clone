window.addEventListener("scroll", () => {
  console.log(window.scrollTop);
  console.log(window.scrollY);
  console.log(window.pageYOffset);
  // transformBox();


  // if (window.scrollY >= 1100 && window.scrollY < 1200) {
  if (window.scrollY >= 1000) {
    document.querySelector('.second').classList.add("transition");
    document.querySelector('.third').classList.add("transition");
    document.querySelector('.fourth').classList.add("transition");

  } else {
    document.querySelector('.second').classList.remove("transition");
    document.querySelector('.third').classList.remove("transition");
    document.querySelector('.fourth').classList.remove("transition");

  }

});



// function transformBox() {
//   // if (window.scrollY >= 800 && window.scrollY < 900) {
//   //   document.querySelector(".second").style.transform = `translate(-42px, 40px)`;
//   //   document.querySelector(".third").style.transform = `translate(-84px, 80px)`;
//   //   document.querySelector(".fourth").style.transform = `translate(-126px, 120px)`;
//   // }
//   // else if (window.scrollY >= 900 && window.scrollY < 1000) {
//   //   document.querySelector(".second").style.transform = `translate(-42px, 20px)`;
//   //   document.querySelector(".third").style.transform = `translate(-84px, 40px)`;
//   //   document.querySelector(".fourth").style.transform = `translate(-126px, 60px)`;
//   // }
//   // else if (window.scrollY >= 1000 && window.scrollY < 1100) {
//   //   document.querySelector(".second").style.transform = `translate(-42px, 0px)`;
//   //   document.querySelector(".third").style.transform = `translate(-84px, 0px)`;
//   //   document.querySelector(".fourth").style.transform = `translate(-126px, 0px)`;
//   // }



//   // const position_second = 40;
//   // const position_third = 80;
//   // const position_fourth = 120;

//   // let transY_second = 0;
//   // let transY_third = 0;
//   // let transY_fourth = 0;

//   // if (window.scrollY >= 1200 && window.scrollY < 1500) {

//   //   for (let i = 0; i < position_second; i++) {

//   //     transY_second = position_second - 1;
//   //     transY_third = position_third - 1;
//   //     transY_fourth = position_fourth - 1;


//   //     document.querySelector(".second").style.transform = `translate(-42px, ${transY_second}px)`;
//   //     document.querySelector(".third").style.transform = `translate(-84px, ${transY_third}px)`;
//   //     document.querySelector(".fourth").style.transform = `translate(-126px, ${transY_fourth}px)`;
//   //   }
//   // }
// }
