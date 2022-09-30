/* HEADER */

// 토글 버튼 눌렀을때 호출되는 함수
function menuToggle() {
    // menu 객체를 가져와서 show라는 클래스를 토글시킴 (show라는 클래스가 없으면 추가, 있으면 삭제)
    document.getElementById('menu').classList.toggle('show');
}

// toggleBtn에 click이벤트가 발생하면 menuToggle함수를 호출
document.getElementById('toggleBtn').addEventListener('click', menuToggle);
