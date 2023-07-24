// section1
// 메인비디오 26초 후에 fade out + display none
const mainVideo = document.getElementById('mainVideo');
const mainElement = document.querySelector('.main');

setTimeout(() => {
  mainElement.style.animation = 'mainFade 1s';
}, 26000);

setTimeout(() => {
    mainElement.style.display = 'none';
}, 27000);

// flying P
const flyingP1 = document.querySelector('.flyingP1');
setTimeout(() => {
    flyingP1.style.left = '7%';
}, 2500);

const flyingP2 = document.querySelector('.flyingP2');
setTimeout(() => {
    flyingP2.style.right = '5%';
}, 4000);