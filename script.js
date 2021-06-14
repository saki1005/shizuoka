'use strict'
{
  // DOMContentLoaded == HTMLのロードが終わってからJSを実行
  document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("menuButton").addEventListener('click', function () {
      this.classList.toggle('active');
      document.getElementById('nav').classList.toggle('active');
      // document.getElementById('mask').classList.toggle('active');
      
      document.getElementById('sp-nav-close').addEventListener('click', function () {
        document.getElementById('nav').classList.remove('active');
      });
    });
  });




  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,


    // 自動再生ミリ秒
    autoplay: {
      delay: 3000
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    freeMode: true,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const targetElement = document.querySelectorAll(".animationTarget");
  console.log(window.innerHeight);
  document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement.length; i++){
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[1].clientHeight * .4
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add('show');
      }
    }
  }); 
}