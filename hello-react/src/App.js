// import logo from './logo.svg';
import './App.css';
import './css/socar.css';
import './css/reset.css';

import image from './image/usp_c.jpg';
import State from './State.js';
import Eventedu from './Eventedu';
import { useState } from 'react';



// 리엑트에서 for문으로 컨텐츠 만드는건 권장x
// 리엑트에서 /(닫는태그)가 필수 !!!

function App() {

    const [headText, setHead] = useState("24시간 언제나")

    function handleHead() {
        setHead('클릭된 제목입니다.')
    }

  return (
  <div className="App">
      <body>
          <header>
              <div className="header-inner">
                  <h1>
                      <a href="#!"><span className="hidden">SOCAR</span></a>
                     
                      <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg"
                          xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160.2 32.5"
                          >

                          <g>
                              <g>
                                  <path className="st0"
                                      d="M45.5,0.8C37,0.8,30,7.7,30,16.3c0,8.5,6.9,15.5,15.5,15.5s15.4-7,15.4-15.5C60.9,7.7,54,0.8,45.5,0.8z
                                  M45.5,25.2c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9s8.9,4,8.9,8.9C54.4,21.2,50.4,25.2,45.5,25.2z" />
                                  <g>
                                      <path className="st0" d="M8.2,9.4c0-3.6,9.4-3.6,11.4,1l5.3-3C23.5,3.9,18.2,0.8,13,0.8C6.8,0.8,1.6,4,1.6,9.7
                                      c0,6.4,7.4,8.1,10.5,8.8s7.2,1.4,7.2,3.9c0,2.4-2.7,3.2-5.6,3.2c-3.7,0-6.6-1.2-7.9-4.1l-5,2.9c1.6,4.5,6.7,7.3,12.8,7.3
                                      c8,0,12.4-3.7,12.4-9.6c0-4.7-4.1-7.6-9-8.8C12.4,12.3,8.2,11.6,8.2,9.4z" />
                                  </g>
                                  <path className="st0"
                                      d="M89,19.6L89,19.6L89,19.6c-1.3,3.3-4.2,5.6-8,5.6c-4.9,0-8.8-4-8.8-9c0-4.9,3.8-9,8.8-9c3.6,0,6.6,2,8,5.1
                                  l0,0l5.8-3.4C92.4,4.1,87,0.8,81,0.8c-8.5,0-15.5,6.9-15.5,15.5S72.4,31.8,81,31.8c6.1,0,11.3-3.6,13.8-8.7L89,19.6z" />
                                  <polygon className="st0"
                                      points="116.4,1.6 109.1,1.6 97.2,30.9 104.7,30.9 112.8,9.9 121.1,30.9 128.6,30.9 		" />
                                  <path className="st0" d="M153,20.2l0.6-0.3c2.9-1.7,4.5-4.7,4.5-8.1c0-6-4.4-10.2-10.7-10.2h-14.2v29.3h6.7v-9.4h6.5l5.4,9.4h7.5
                                  L153,20.2z M147,15.8h-7.1v-8h7.1c2.6,0,4.4,1.6,4.4,4S149.6,15.8,147,15.8z" />
                              </g>
                          </g>
                      </svg>
                  </h1>
                  <a href="#!" className="hamberger"><span className="hidden">메뉴</span></a>
              </div>
              <div className="hamberger-click">
                  <nav className="hamberger-nav">
                      <div>
                          <a href="#!">이용 안내</a>
                          <a href="#!">요금 안내</a>
                          <a href="#!">혜택 안내</a>
                          <a href="#!">쏘카존 개설 신청</a>
                      </div>
                      <div>
                          <a href="#!">쏘카의 서비스</a>
                          <a href="#!">쏘카 비즈니스</a>
                          <a href="#!">쏘카 플랜</a>
                      </div>
                      <div>
                          <a href="#!">회사소개</a>
                          <a href="#!">공고</a>
                      </div>
                  </nav>
              </div>
          </header>
          <section id="cover">
              <h2>
                  차가 필요한
                  <br/>
                  모든 순간, 쏘카
              </h2>
          </section>

          <Eventedu></Eventedu>

          <main>
              <section id="advantages-container">
                  <div className="advantage">
                      <h2 onClick={handleHead}>{headText}</h2>
                      <p>
                          한밤중이나 주말에도 스마트폰으로
                          <br/>
                          시간에 구애받지 않고
                          <br/>
                          쏘카와 함께 이동하세요.
                      </p>
                      <figure>
                          <img src="image/usp_a.jpg" alt="차 옆에 서있는 남자가 싱글벙글 웃는 사진" />
                      </figure>
                  </div>
                  <div className="advantage">
                      <h2>원하는 곳에서</h2>
                      <p>
                          내 주변 3분 거리 쏘카존에서
                          <br/>
                          혹은 내가 있는 곳으로 쏘카를 불러
                          <br/>
                          어디서나 편하게 출발하세요.
                      </p>
                      <figure>
                          <img src="image/usp_b.jpg" alt="차 옆에 서있는 남자가 싱글벙글 웃는 사진" />
                      </figure>
                  </div>
                  <div className="advantage">
                      <h2>필요한 시간만큼</h2>
                      <p>
                          간단한 장보기부터 주말여행까지
                          <br/>
                          10분 단위로 원하는 만큼만 이용하세요.
                      </p>
                      <figure>
                          <img src={image} alt="차 옆에 서있는 남자가 싱글벙글 웃는 사진" />
                      </figure>
                  </div>
                  <div className="advantage">
                      <h2>다양한 차종을</h2>
                      <p>
                          연인과의 드라이브부터 가족 캠핑까지
                          <br/>
                          상황에 맞게 50여 종의 차량을
                          <br/>
                          선택해서 이용하세요.
                      </p>
                      <figure>
                          <img src="image/usp_d.jpg" alt="차 옆에 서있는 남자가 싱글벙글 웃는 사진" />
                      </figure>
                  </div>
              </section>

              <section id="start-together">
                  <h2 className="hidden">함께 시작하는 쏘카</h2>
                  <p>
                      <span className="point-blue count-up">8,286,684</span>명의 회원이 쏘카와
                      <br/>
                      함께하고 있습니다.
                      <br/>
                      지금 바로 <span className="point-blue">쏘카 드라이브</span>를
                      <br/>
                      시작하세요.
                  </p>
                  <div className="incline"></div>
              </section>
          </main>
          <footer>
              <div className="footer-container">
                  <div className="sns-container">
                      <a href="#!">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                              <g id="그룹_553" data-name="그룹 553" transform="translate(5481 -4830)">
                                  <g id="그룹_502" data-name="그룹 502" transform="translate(-5544 -93)">
                                      <g id="그룹_109" data-name="그룹 109" transform="translate(63.654 4923.808)">
                                          <g id="그룹_86" data-name="그룹 86" transform="translate(0 0)">
                                              <rect id="사각형_128" data-name="사각형 128" width="31" height="31" rx="15.5"
                                                  transform="translate(0.346 0.192)" fill="none" stroke="#646f7c"
                                                  stroke-width="2" />
                                          </g>
                                      </g>
                                      <g id="iconfinder_038_011_instagram_mobile_photo_network_android_material_1646917"
                                          transform="translate(68 4928)">
                                          <path id="패스_374" data-name="패스 374"
                                              d="M14.8,3H8.193A5.193,5.193,0,0,0,3,8.193V14.8A5.193,5.193,0,0,0,8.193,20H14.8A5.193,5.193,0,0,0,20,14.8V8.193A5.193,5.193,0,0,0,14.8,3Zm3.777,11.8A3.781,3.781,0,0,1,14.8,18.579H8.193A3.781,3.781,0,0,1,4.416,14.8V8.193A3.781,3.781,0,0,1,8.193,4.416H14.8a3.781,3.781,0,0,1,3.777,3.777Z"
                                              transform="translate(0)" fill="#646f7c" />
                                          <path id="패스_375" data-name="패스 375"
                                              d="M11.749,7.5A4.249,4.249,0,1,0,16,11.749,4.249,4.249,0,0,0,11.749,7.5Zm0,7.081a2.833,2.833,0,1,1,2.833-2.833,2.833,2.833,0,0,1-2.833,2.833Z"
                                              transform="translate(-0.251 -0.251)" fill="#646f7c" />
                                          <circle id="타원_2072" data-name="타원 2072" cx="0.944" cy="0.944" r="0.944"
                                              transform="translate(14.991 6.116)" fill="#646f7c" />
                                      </g>
                                  </g>
                              </g>
                          </svg>
                      </a>
                      <a href="#!">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                              <g id="그룹_554" data-name="그룹 554" transform="translate(5481 -4768.192)">
                                  <g id="그룹_109" data-name="그룹 109" transform="translate(-5480.346 4769)">
                                      <g id="그룹_86" data-name="그룹 86" transform="translate(0 0)">
                                          <rect id="사각형_128" data-name="사각형 128" width="31" height="31" rx="15.5"
                                              transform="translate(0.346 0.192)" fill="none" stroke="#646f7c"
                                              stroke-width="2" />
                                      </g>
                                      <g id="iconfinder_square-facebook_317727" transform="translate(11.882 9.053)">
                                          <path id="f"
                                              d="M17.623,18.869V12.705h2.054l.514-2.568H17.623V9.11a1.363,1.363,0,0,1,1.541-1.541h1.027V5H18.137c-1.888,0-3.082,1.48-3.082,3.6v1.541H13v2.568h2.054v6.164Z"
                                              transform="translate(-13 -5)" fill="#646f7c" />
                                      </g>
                                  </g>
                              </g>
                          </svg>
                      </a>
                      <a href="#!">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                              <g id="그룹_555" data-name="그룹 555" transform="translate(5488 -4905.192)">
                                  <g id="그룹_110" data-name="그룹 110" transform="translate(-5486.692 4906)">
                                      <g id="그룹_85" data-name="그룹 85" transform="translate(0 0)">
                                          <rect id="사각형_128" data-name="사각형 128" width="31" height="31" rx="15.5"
                                              transform="translate(-0.308 0.192)" fill="none" stroke="#646f7c"
                                              stroke-width="2" />
                                      </g>
                                      <g id="iconfinder_icon-social-youtube_211929" transform="translate(12.191 10.172)">
                                          <path id="패스_49" data-name="패스 49" d="M11.316,80.606v-11.5L19.8,74.854Z"
                                              transform="translate(-11.316 -69.109)" fill="#646f7c" />
                                      </g>
                                  </g>
                              </g>
                          </svg>
                      </a>
                      <a href="#!">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33.192" height="33.192" viewBox="0 0 33.192 33.192">
                              <g id="그룹_556" data-name="그룹 556" transform="translate(5425 -4952)">
                                  <g id="그룹_26" data-name="그룹 26" transform="translate(-5424 4953)">
                                      <path id="패스_84" data-name="패스 84"
                                          d="M15.6,0a15.6,15.6,0,0,1,15.6,15.6h0A15.6,15.6,0,1,1,0,15.6H0A15.6,15.6,0,0,1,15.6,0Z"
                                          transform="translate(0 0)" fill="none" stroke="#646f7c" stroke-width="2" />
                                      <path id="패스_48" data-name="패스 48"
                                          d="M368.068,243.5l-4.235-6.084h-3.511v11.368H364V242.7l4.235,6.084h3.511V237.418h-3.678Z"
                                          transform="translate(-350.439 -227.498)" fill="#646f7c" />
                                  </g>
                              </g>
                          </svg>
                      </a>
                  </div>
                  <nav>
                      <a href="#!">회사소개</a>
                      <a href="#!">인재채용</a>
                      <a href="#!">나눔카</a>
                      <a href="#!">이용약관</a>
                      <a href="#!" className="important-information">개인정보처리방침</a>
                      <a href="#!" className="important-information">위치정보 이용약관</a>
                      <a href="#!" className="important-information">차량손해면책제도</a>
                      <a href="#!">고객센터</a>
                      <a href="#!">제휴 문의</a>
                  </nav>
                  <div className="information">
                      <div>
                          <dl>
                              <dt>주소</dt>
                              <dd>제주특별자치도 제주시 연미길 42 (오라삼동)</dd>
                          </dl>
                          <dl>
                              <dt>전화</dt>
                              <dd>1661-3315</dd>
                          </dl>
                          <dl>
                              <dt>팩스</dt>
                              <dd>02-6969-9333</dd>
                          </dl>
                      </div>
                      <div>
                          <p>(주)쏘카 통신판매업 <a href="#!" className="biz-info">사업자정보 확인</a></p>
                          <p>신고: 제 2019-제주오라-3호, 사업자등록번호: 616-81-90529, 대표자: 박재욱</p>
                          <p>© 2019 SOCAR All rights reserved.</p>
                      </div>
                  </div>
              </div>
             </footer>
            <section id="app-download">
              <a href="#!" className="unit-link"></a>
              <div className="incline"></div>
              <figure className="app-icon">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" version="1.1" id="레이어_1"
                      x="0px" y="0px" viewBox="0 0 158.3 158.3"       xmlspace="preserve">
                      <rect x="0" fill="#FFFFFF"  width="158.3" height="158.3" />
                      <g>
                          <g>
                              <g>
                                  <g>
                                      <path fill="#00B8FF"
                                          d="M67.5,50.6c0-7.8,20.6-7.9,25.1,2.1l11.6-6.7C101,38.4,89.4,31.6,78,31.6c-13.5,0-25,7.1-25,19.4      c0,14.1,16.2,17.7,23,19.4c6.8,1.6,15.8,3.1,15.8,8.7c0,5.2-5.8,7.1-12.3,7.1c-8.2,0-14.5-2.7-17.3-9.1L51,83.5      c3.4,9.9,14.6,16,28,16c17.4,0,27.1-8,27.1-21c0-10.2-8.9-16.8-19.8-19.4C76.8,56.7,67.5,55.4,67.5,50.6z" />
                                  </g>
                                  <polygon fill="#C5C8CE"
                                      points="118.5,99.4 106.7,99.4 116.5,116.4 41.8,116.4 51.6,99.4 39.8,99.4 24.2,126.6 134.1,126.6    " />
                              </g>
                          </g>
                      </g>
                  </svg>

              </figure>
              <p>쏘카 앱 다운로드</p>
           </section>

           <State></State>
           





          </body>
      
  </div>
  );
}

export default App;
