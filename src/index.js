import ReactDOM from 'react-dom';

const product = '맥북';

ReactDOM.render(
  <>
    <h1> 나만의 {product} 주문하기</h1>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""/>
  </>
  ,
  document.getElementById('root')// dom 요소들 중에서 root 라는 id 속성을 가지고있는 요소를 가져오라 어디있냐면 index.html 의 body 태그 밑에 div 태그에 있다.
);
