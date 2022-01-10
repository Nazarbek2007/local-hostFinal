const Button = document.querySelector('.header__content-icons'),
      test = document.querySelector('.header__content-test'),
      Hcontent = document.querySelector('.header__content');
Button.addEventListener('click', e => {
  e.preventDefault();
  test.classList.remove('active2'); // 
});
Hcontent.addEventListener('click', e => {
  if (e.target == Hcontent) {
    test.classList.add('active2');
  }
});
const hoverImg = document.querySelector('.main__cakeContent-img'),
      hoverTink = document.querySelector('.main__cakeContent-Tink'),
      hoverImg2 = document.querySelector('.main__cakeContent-img2'),
      hoverTink2 = document.querySelector('.main__cakeContent-Tink2'),
      hoverImg3 = document.querySelector('.main__cakeContent-img3'),
      hoverTink3 = document.querySelector('.main__cakeContent-Tink3'),
      hoverImg4 = document.querySelector('.main__cakeContent-img4'),
      hoverTink4 = document.querySelector('.main__cakeContent-Tink4');
/* 
False - значение : 
1 - false
2 - null
3 - 0
4 - ''
5 - undefined
*/

if (hoverImg && hoverTink) {
  hoverImg.addEventListener('mouseover', e => {
    hoverTink.classList.add('active');
    hoverImg.style.filter = 'none';
  });
  hoverImg.addEventListener('mouseleave', e => {
    hoverTink.classList.remove('active');
    hoverImg.style.filter = 'blur(2px)';
  });
  hoverTink.addEventListener('mouseover', e => {
    hoverTink.classList.add('active');
    hoverImg.style.filter = 'none';
  });
  hoverTink.addEventListener('mouseleave', e => {
    hoverTink.classList.remove('active');
    hoverImg.style.filter = 'blur(2px)';
  });
}

if (hoverImg2 && hoverTink2) {
  hoverImg2.addEventListener('mouseover', e => {
    hoverTink2.classList.add('active');
    hoverImg2.style.filter = 'none';
  });
  hoverImg2.addEventListener('mouseleave', e => {
    hoverTink2.classList.remove('active');
    hoverImg2.style.filter = 'blur(2px)';
  });
  hoverTink2.addEventListener('mouseover', e => {
    hoverTink2.classList.add('active');
    hoverImg2.style.filter = 'none';
  });
  hoverTink2.addEventListener('mouseleave', e => {
    hoverTink2.classList.remove('active');
    hoverImg2.style.filter = 'blur(2px)';
  });
}

if (hoverImg3 && hoverTink3) {
  hoverImg3.addEventListener('mouseover', e => {
    hoverTink3.classList.add('active');
    hoverImg3.style.filter = 'none';
  });
  hoverImg3.addEventListener('mouseleave', e => {
    hoverTink3.classList.remove('active');
    hoverImg3.style.filter = 'blur(2px)';
  });
  hoverTink3.addEventListener('mouseover', e => {
    hoverTink3.classList.add('active');
    hoverImg3.style.filter = 'none';
  });
  hoverTink3.addEventListener('mouseleave', e => {
    hoverTink3.classList.remove('active');
    hoverImg3.style.filter = 'blur(2px)';
  });
}

if (hoverImg4 && hoverTink4) {
  hoverImg4.addEventListener('mouseover', e => {
    hoverTink4.classList.add('active');
    hoverImg4.style.filter = 'none';
  });
  hoverImg4.addEventListener('mouseleave', e => {
    hoverTink4.classList.remove('active');
    hoverImg4.style.filter = 'blur(2px)';
  });
  hoverTink4.addEventListener('mouseover', e => {
    hoverTink4.classList.add('active');
    hoverImg4.style.filter = 'none';
  });
  hoverTink4.addEventListener('mouseleave', e => {
    hoverTink4.classList.remove('active');
    hoverImg4.style.filter = 'blur(2px)';
  });
}

const li = document.querySelectorAll('.mainMenu__contentList-link'),
      liCen = document.querySelectorAll('.mainMenu__contentList-linkCen'),
      liBtm = document.querySelectorAll('.mainMenu__contentList-linkBtm'),
      Img = document.querySelectorAll('.mainMenu__content-slideImg'),
      imgCen = document.querySelectorAll('.mainMenu__content-slideImgCen'),
      imgBtm = document.querySelectorAll('.mainMenu__content-slideImgBtm');

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', function () {
    RemoveClass();
    this.classList.add('active');
    Img[i].classList.add('active'); // console.log(li[i]);
  });
}

function RemoveClass() {
  li.forEach(item => {
    item.classList.remove('active');
  });
  Img.forEach(item => {
    item.classList.remove('active');
  });
}

for (let i = 0; i < liCen.length; i++) {
  liCen[i].addEventListener('click', function () {
    RemoveClassCen();
    this.classList.add('active');
    imgCen[i].classList.add('active'); // console.log(li[i]);
  });
}

function RemoveClassCen() {
  liCen.forEach(item => {
    item.classList.remove('active');
  });
  imgCen.forEach(item => {
    item.classList.remove('active');
  });
}

for (let i = 0; i < liBtm.length; i++) {
  liBtm[i].addEventListener('click', function () {
    RemoveClassBtm();
    this.classList.add('active');
    imgBtm[i].classList.add('active'); // console.log(li[i]);
  });
}

function RemoveClassBtm() {
  liBtm.forEach(item => {
    item.classList.remove('active');
  });
  imgBtm.forEach(item => {
    item.classList.remove('active');
  });
}