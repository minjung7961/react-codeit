import Dice from './Dice';

function App(){
  return (
    <div> 
      <Dice color="blue"/>{/* 컴포넌트에 속성지정 크롬 개발자도구 props 참조! 컴포넌트의 속성 : props, 파라미터로도 보내질수있음*/}
    </div>
  );
}

export default App;