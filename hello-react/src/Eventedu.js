import React, { useState } from 'react'

export default function Eventedu() {


    // onClick : 요소를 클릭했을때
    // onChange : input요소에 변화가 생겼을때
    // onSubmit : form이 제출될 때
    // onMouseEnter : 마우스 올렸을때
    // onMouseLeave : 마우스 나갔을때
    // onKeyDown : 키 누를때
    // onKeyUp : 키 땔때
    // onFocus : 요소가 포커스되었을때
    // onBlur : 요소가 포커스를 잃었을때
    // onLoad : 이미지 등이 리소스를 로드 했을때
    // onError : 이미지등이 리소스를 로드하는데에 실패했을때
    // onContextMenu : 요소에 마우스 오른쪽 클릭 했을때
    // onScroll : 요소가 스크롤 될 때
    // 사용자 정의 이벤트 : 아래 형태를 이용해 새로운 이벤트 객체 생성 가능..한데 우리가 슬일이 언제 있으련지?
    // const myEvent = new Event('custom');

    const [isEnter, setIsEnter] = useState(false);

    function handleEnterMouse() {
      setIsEnter(true);
    }

    function handleLeaveMouse() {
      setIsEnter(false);
    }

       

  return (
    <div>
        
        {/* 마우스를 올리면 "지금 내 위에 마우스가 있어요" */}
        {/* 마우스를 밖으로 나가면 "내 위에는 마우스가 없어요" 라고 하단 p태그에 출력되도록 만들어봅시다!*/}
        <p onMouseEnter={handleEnterMouse} onMouseLeave={handleLeaveMouse}>
          {isEnter ? "지금 내 위에 마우스가 있어요" : "내 위에는 마우스가 없어요"}
        </p>


    </div>
  )
}
