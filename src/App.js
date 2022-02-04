import Dice from './Dice'; // 다이스 컴포넌트 임포트

function App(){
  // 리턴문에 괄호를 쓰게되면 여러줄에 걸쳐서 리턴문을 보낼수 있다.
  return (
    <div> 
      <Dice />{/* 가독성 있는 컴포넌트 코드 */}
    </div>
  );
}

export default App;