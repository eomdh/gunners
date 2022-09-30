/* LEGEND */

// 해당 포지션을 선택했을때 활성화 시켜주고 해당 포지션의 선수들을 보여주는 함수
function filterSelection(id) {
    var x, i;

    //변수 x에 listItem 클래스 초기화
    x = document.getElementsByClassName('listItem');

    // 반복문을 사용하여 removeClass 함수로 active 클래스를 제거 (우선 모든 리스트 비활성화)
    for(i = 0; i < x.length; i++) {
        removeClass(x[i], 'active');
    }

    // addClass 함수로 id 객체와 active 클래스를 넘겨줌 (선택된 리스트만 활성화)
    addClass(document.getElementById(id), 'active');

    // x에 filterItem 클래스 초기화
    x = document.getElementsByClassName('filterItem');

    //반복문을 사용하여 removeClass 함수로 show라는 클래스를 제거 (우선 모든 아이템에 show 클래스 삭제)
    for(i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        // id를 검색했을때 그 리턴값이 -1보다 크면(존재하면) 
        // 즉, 해당 리스트의 아이템들이라면 리턴값이 양수이므로 addClass함수를 통해 show라는 클래스 추가
        if(x[i].className.indexOf(id) > -1) {
            // 해당 객체에 show라는 클래스 추가
            addClass(x[i], 'show');
        }
    }
}

// 초기화면에 아무것도 출력되지 않기 때문에 첫번째 리스트인 gk를 인자로 함수 실행
filterSelection('gk');

function addClass(element, name) {
    // if문으로 className에 name 클래스가 있는지 확인
    if(element.className.indexOf(name) == -1) {
        // 만약 없다면 name 클래스를 추가
        element.className += " " + name;
    }
}

function removeClass(element, name) {
    var arr;
    // className을 split함수를 사용하여 쪼갠뒤 배열형태로 arr에 저장
    arr = element.className.split(" ");

    // while문을 통하여 name클래스가 arr에 존재하는지 검사
    while(arr.indexOf(name) > -1) {
        // splice함수를 사용하여 arr의 name이 있는곳으로 부터 한개의 요소를 삭제
        // 만약 name 클래스가 두 개 이상이어도 while문이 반복실행 되기 때문에 모두 삭제됨
        arr.splice(arr.indexOf(name), 1);
    }

    // className에 join함수를 사용하여 정리된 내용을 넣어줌
    // join은 배열의 원소를 연결해서 하나의 값으로 만들어줌
    element.className = arr.join(" "); 
}

// 각 리스트 클릭에 대한 이벤트 리스너
document.getElementById('gk').addEventListener('click', filterSelection.bind(null, 'gk'));
document.getElementById('df').addEventListener('click', filterSelection.bind(null, 'df'));
document.getElementById('mf').addEventListener('click', filterSelection.bind(null, 'mf'));
document.getElementById('fw').addEventListener('click', filterSelection.bind(null, 'fw'));

// 선수를 클릭했을때의 모달창 함수
function viewLegend(event) {
    var polyNode = event.target;

    // overlay되면서 나오는 아이콘 i태그를 클릭할 경우 target에 i가 아니라 overlay클래스가 담기도록 함
    if(polyNode.tagName.toLowerCase() == 'i') {
        polyNode = polyNode.parentNode;
    }

    var overlayNode = polyNode;

    // overlay div태그의 형제 태그에 해당하는 img 태그에 접근하기 위해
    var imageNode = overlayNode.nextElementSibling;

    // 각 img에 대한 name, position, text 정보를 가져옴
    var itemNode = overlayNode.parentNode;
    var nameNode = itemNode.nextElementSibling;
    var positionNode = nameNode.nextElementSibling;
    var textNode = positionNode.nextElementSibling;

    // 가져온 정보를 바탕으로 모달창 구성
    document.getElementById('modalImage').src = imageNode.src;
    document.getElementById('modalName').innerHTML = nameNode.innerHTML;
    document.getElementById('modalPosition').innerHTML = positionNode.innerHTML;
    document.getElementById('modalCountry').innerHTML = textNode.innerHTML;

    // 모달창의 display를 block으로 활성화
    document.getElementById('legendModal').style.display = 'block';
}

// 모달창을 닫기 위한 close 아이콘 이벤트 리스너
document.getElementById('modalClose').addEventListener('click', function() {
    // 활성화된 모달창의 display을 none으로 바꿔줌
    document.getElementById('legendModal').style.display = 'none';
});

// viewLegend함수를 filterItems라는 변수를 통해 모두 클릭이벤트로 연결해줌
// 모든 overlay객체에 대해서 click 이벤트 발생시 함수 실행
var filterItems = document.getElementsByClassName('overlay');

for(var i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', viewLegend);
}