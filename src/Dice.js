import diceBlue01 from "./assets/dice-blue-1.svg";
import diceRed01 from "./assets/dice-red-1.svg";


function Dice(props){ // 속성값 지정받음 props 라는 이름으로 변수를 받는건 속성값을 받는다라는 의미를 명확하게하기위한 국룰
  const diceImg = props.color === 'red' ? diceRed01 : diceBlue01
  return <img src={diceImg} alt="주사위"/>
}

export default Dice;