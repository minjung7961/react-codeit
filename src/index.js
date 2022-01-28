import ReactDOM from 'react-dom';

const product = 'macbook';
const model = ' Air';
const item = product + model;
const imageUrl = './img/macbook_air.jpg'

function handleClick(){
  alert('곧 도착합니다!');
}
ReactDOM.render( // axs 자바스크림트 코드 활용방법 표현식은 사용할수있는데 중괄호안에는 for if 문 자바스크립트 함수선언문은 사용할수 없음.
  <>
    <h1> 나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>
  ,
  document.getElementById('root')// dom 요소들 중에서 root 라는 id 속성을 가지고있는 요소를 가져오라 어디있냐면 index.html 의 body 태그 밑에 div 태그에 있다.
);
