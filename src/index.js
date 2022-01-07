import ReactDOM from 'react-dom';

// 리엑트에서 지원하는 jsx 라는분법

/* jsx 에서는 모든 html 문법을 사용할수없다 
그예시로 
  * class 는 자바스크립트에서는 객체개념이라 쓸수없다 그래서 html class 쓰기위해서 className 속성을 사용해야한다.
  * for 를 사용할수없다 그래서 htmlFor 라고 써야한다.
  * 이벤트 핸들러를 사용할수 없다 (onfocus, onmousdown, onblur) 그래서 낙타채(카멜케이스)로 바꿔 써야 사용가능하다 -> (onFocus, onMousDown, onBlur)
*/

ReactDOM.render(
  <form>
    <h1>안녕 리엑트!</h1>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""/>
  </form>
  ,
  document.getElementById('root')
);
