import ReactDOM from 'react-dom';

const element = <h1>안녕 리엑트!</h1>;//html 태그

ReactDOM.render( // axs 자바스크림트 코드 활용방법 표현식은 사용할수있는데 중괄호안에는 for if 문 자바스크립트 함수선언문은 사용할수 없음.
  element // html 테그를 변수에 넣어도 쓸수있다.
  ,
  document.getElementById('root')// dom 요소들 중에서 root 라는 id 속성을 가지고있는 요소를 가져오라 어디있냐면 index.html 의 body 태그 밑에 div 태그에 있다.
);
