import { on } from 'events';
import React, {useState} from 'react'

export default function State() {

    const [count, setCount] = useState(0);  // *** 리엑트식 변수(상수) 정해주는 코드 ***   hook(훅) 이라고 한다.
                                            // 위 코드를 해석하면 count = 0이 되고 setCount라는 함수로 count라는 변수(상수)의 상태를 컨트롤해준다.

    const [isOn, setInOn] = useState(false);

    function changeToggle() {
        setInOn(!isOn);
        console.log(`isOn : ${isOn}`);
    }

    const [inputText, inputState] = useState('');

    const onChange = (e) => {
      inputState(e.target.value);
    }

    
 
  return (
    <div>
        {count}
        <button onClick={ () => {setCount(count + 10)}}>올려</button>

        <p>현재 온오프 상태 : { isOn ? 'On' : 'OFF' }</p>
        <button onClick={changeToggle}>토글버튼</button>

        {/* 숙제 */}
        {/* 인풋에 글씨를 입력하면 */}
       <input type="text" onChange={onChange} value={inputText} />
       {/* p태그 안에 입력한 텍스트가 그대로 출력되게 만들어주세요*/}
        <p className="your-input">
            당신의 입력 : {inputText}
        </p> 
        
      
      
        

    </div>
  )
}
