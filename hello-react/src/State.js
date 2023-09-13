import React, {useState} from 'react'

export default function State() {

    const [count, setCount] = useState(0);  // *** 리엑트식 변수(상수) 정해주는 코드 ***   hook(훅) 이라고 한다.

  return (
    <div>
        {count}
        <button onClick={ () => {setCount(count + 10)}}>올려</button>
    </div>
  )
}
