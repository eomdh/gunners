/* GALLERY */

// 현재 보여주고 있는 사진의 번호
var imageSlideIndex = 1;

showImageSlides(imageSlideIndex);

// 인자값에 맞는 사진을 보여주는 함수
function showImageSlides(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');
    
    // 만약 n값이 6보다 크다면 1로 초기화 되어 첫번째 사진 보여줌 
    if (n > slides.length) { 
        imageSlideIndex = 1 }

    // 만약 n값이 1보다 작다면 5(사진의 갯수)로 초기화 되어 마지막 사진을 보여줌 
    if (n < 1) {
        imageSlideIndex = slides.length }  
    
    // 모든 사진의 display를 none처리 하여 보여지지 않게 처리
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // 모든 dot에 active를 없애서 색이 변하지 않게 처리
    for(i = 0; i < dots.length; i++) {
        // 만약 dots의 i번째 인덱스 요소의 클래스 이름에 액티브라는 클래스가 있다면 이를 공백으로 제거 한 후에 다시 넣어줌
        dots[i].className = dots[i].className.replace(' active', '');
    }

    // 변수 imageSlideIndex에 해당하는 사진과 dot이 보여짐
    slides[imageSlideIndex - 1].style.display = 'block';
    dots[imageSlideIndex - 1].className += ' active';
}

// next, prev에 대한 이벤트 처리를 위한 함수
function plusImageSlides(n) {
    showImageSlides(imageSlideIndex += n);
}

// dot에 대한 이벤트 처리를 위한 함수
function currentImageSlides(n) {
    showImageSlides(imageSlideIndex = n);
}

// 바로 인자를 넘겨버리면 함수가 실행되기 떄문에 bind로 null 처리 후 1, -1이라는 인자를 넘김
// next, prev에 이벤트 처리
document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1)); 

// dot 이벤트 처리
document.getElementById('dot1').addEventListener('click', currentImageSlides.bind(null, 1));
document.getElementById('dot2').addEventListener('click', currentImageSlides.bind(null, 2)); 
document.getElementById('dot3').addEventListener('click', currentImageSlides.bind(null, 3));
document.getElementById('dot4').addEventListener('click', currentImageSlides.bind(null, 4));
document.getElementById('dot5').addEventListener('click', currentImageSlides.bind(null, 5));