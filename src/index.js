import ReactDOM from 'react-dom';
import { Fragment } from 'react/cjs/react.production.min';

// 이 페이지는 index.html 이 실행되고 나서 실행되는 파일 리엑트 코드들중에서 가장먼저 실행됨

// 리엑트에서 지원하는 jsx 라는분법

/* jsx 에서는 모든 html 문법을 사용할수없다 
그예시로 
  * class 는 자바스크립트에서는 객체개념이라 쓸수없다 그래서 html class 쓰기위해서 className 속성을 사용해야한다.
  * for 를 사용할수없다 그래서 htmlFor 라고 써야한다.
  * 이벤트 핸들러를 사용할수 없다 (onfocus, onmousdown, onblur) 그래서 낙타채(카멜케이스)로 바꿔 써야 사용가능하다 -> (onFocus, onMousDown, onBlur)
*/

// 첫번쨰 인자 html 문을 두번쨰 인자의 id 정보를보고 index.html 의 id 가 root 인 태그안에 첫번쨰 인자 값을 넣어 랜더링함
ReactDOM.render(
  // 반드시 한 태그로 묶여 있어야한다. 이를 위해 밖에 하나의 태그로 묶어야하는데 이를위해 Fragment 를 쓴다.
  <Fragment>
    <h1>안녕 리엑트!</h1>
    <label htmlFor="name">이름</label>
    <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""/>
  </Fragment>
  ,
  document.getElementById('root')// dom 요소들 중에서 root 라는 id 속성을 가지고있는 요소를 가져오라 어디있냐면 index.html 의 body 태그 밑에 div 태그에 있다.
);
