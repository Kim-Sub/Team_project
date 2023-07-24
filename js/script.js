// ■■■■ section1
// 메인비디오 26초 후에 fade out + display none
const videoCover = document.querySelector('.videoCover');
setTimeout(() => {
    videoCover.style.animation = 'mainFade 1s';
}, 26000);
setTimeout(() => {
    videoCover.style.display = 'none';
    main2.style.display = 'block';
}, 27000);


// 동영상 종료시 SKIP버튼 비활성화 + 클릭시 동영상(videoCover) 즉시 종료
// ─────────────────────문제점 비디오 SKIP시 scroll-down 버튼 위치 이상해짐
const skipBtn = document.querySelector('.skipBtn');
const flyingP = document.querySelectorAll('#section1 p');

setTimeout(() => {
    skipBtn.style.display = 'none';
}, 26500);

skipBtn.addEventListener('click', function() {
    videoCover.style.display = 'none';
    main2.style.display = 'block';
    flyingP.forEach(paragraph => {
        paragraph.style.display = 'none';
    });
});



// flying P
const flyingP1 = document.querySelector('.flyingP1');
setTimeout(() => {
    flyingP1.style.left = '5%';
}, 2500);
setTimeout(() => {
    flyingP1.style.top = '-100%';
    flyingP1.style.transform = 'scale(0)'
}, 6500);

const flyingP2 = document.querySelector('.flyingP2');
setTimeout(() => {
    flyingP2.style.right = '5%';
}, 4000);
setTimeout(() => {
    flyingP2.style.top = '-100%';
    flyingP2.style.transform = 'scale(0)'
}, 8000);

const flyingP3 = document.querySelector('.flyingP3');
setTimeout(() => {
    flyingP3.style.opacity = '1';
}, 10000);

const flyingP4 = document.querySelector('.flyingP4');
setTimeout(() => {
    flyingP4.style.opacity = '1';
}, 13000);
setTimeout(() => {
    flyingP3.style.opacity = '0';
    flyingP4.style.opacity = '0';
}, 20000);


// 580 스크롤 도착시 메인 동영상 페이드
window.addEventListener('scroll', function() {
    var mainVideo = document.getElementById('mainVideo');
    var section1sub = document.querySelector('.section1sub');
    var scrollY = window.scrollY ;
    if (scrollY >= 600) {
      mainVideo.classList.add('dark-video');
      section1sub.classList.add('dark');
    } else {
      mainVideo.classList.remove('dark-video');
      section1sub.classList.remove('dark');
    }
  });




// ■■■■ section2
// page-down 버튼 누르면 main2 등장 + section2>container75 scale(1)
const pageDown = document.querySelector('.scroll-down');
const main2 = document.getElementById('main2');
const section2 = document.getElementById('section2');
const section2container = document.querySelector('#section2>.container75');

pageDown.addEventListener('click', function() {
    main2.style.display = 'block';
  section2.scrollIntoView({ behavior: 'smooth' });
  section2container.style.transform = 'scale(1)'
});




// 1000 스크롤 도착시 섹션2 네비 메뉴 고정 + 450 스크롤 도착시 section2container scale(1)
window.addEventListener('scroll', function() {
    var navWrap = document.querySelector('.nav-Wrap');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 1000) {
      navWrap.style.position = 'fixed';
      navWrap.style.top = '0';
    } else {
      navWrap.style.position = 'absolute';
    }

    if (scrollPosition >= 450) {
        section2container.style.transform = 'scale(1)'
      } else {
        section2container.style.transform = 'scale(.1)'
      }
  });