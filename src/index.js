import ReactDOM from 'react-dom';

// 리엑트 컴포넌트
function Hello(){ // 리엑트 컴포넌트 함수로 쓰기위해선 반드시 대문자로 시작해야한다.
  return <h1> 안녕 리엑트 </h1>; // jxm 문을 리턴해야함.
}

const element = (
  <>
    {/*  jxm 문법을 커스텀 태그처럼 활용할 수도 있다.  */}
    < Hello /> { /* <h1> 안녕 리엑트 </h1> 출력 */}
    < Hello /> 
    < Hello />
  </>
);

ReactDOM.render( // axs 자바스크림트 코드 활용방법 표현식은 사용할수있는데 중괄호안에는 for if 문 자바스크립트 함수선언문은 사용할수 없음.
  element ,// 엘리먼트를 함수 형태로도 사용할 수 있다. 그 말인 즉슨 jxm 문법을 커스텀 태그처럼 활용할 수도 있다.
  document.getElementById('root')// dom 요소들 중에서 root 라는 id 속성을 가지고있는 요소를 가져오라 어디있냐면 index.html 의 body 태그 밑에 div 태그에 있다.
);

