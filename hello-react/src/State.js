import React, {useState} from 'react'

export default function State() {

    const [count, setCount] = useState(0);  // *** 리엑트식 변수(상수) 정해주는 코드 ***   hook(훅) 이라고 한다.
                                            // 위 코드를 해석하면 count = 0이 되고 setCount라는 함수로 count라는 변수(상수)의 상태를 컨트롤해준다.

    const [isOn, setInOn] = useState(false);

    function changeToggle() {
        setInOn(!isOn);
        console.log(`isOn : ${isOn}`);
    }

    
 
  return (
    <div>
        {count}
        <button onClick={ () => {setCount(count + 10)}}>올려</button>

        <p>현재 온오프 상태 : { isOn ? 'On' : 'OFF' }</p>
        <button onClick={changeToggle}>토글버튼</button>

        {/* 숙제 */}
        {/* 인폿에 글씨를 입력하면 */}
        <input type="text" value onChange={변했을때}></input>

    </div>
  )
}
