import React from 'react';
import { useState } from 'react';
import {
  MainArea,
  Header,
  AreaInner,
  Item,
  Head,
  Body,
  ActivePopUp,
} from './styles';
export default function MultiplyArea() {
  const [ActivePop, setActivePop] = useState(false);
  return (
    <>
      {ActivePop && (
        <ActivePopUp>
          <div>
            <span onClick={() => setActivePop(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </span>
            <svg
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="activation-modal__icon"
            >
              <path
                d="M20.167 0A14.667 14.667 0 0 0 5.5 14.667v14.666h3.667V14.667a11 11 0 1 1 22 0v14.666h3.666V14.667A14.667 14.667 0 0 0 20.167 0Z"
                fill="url(#a)"
              ></path>
              <path
                d="m1.836 14.666 3.667 3.667 3.666-3.667 3.667 3.667 3.667-3.667 3.666 3.667 3.667-3.667 3.667 3.667 3.666-3.667 3.667 3.667 3.667-3.667v42.167H1.836V14.666Z"
                fill="#1D3F21"
              ></path>
              <path
                d="M45.83 9.166a14.667 14.667 0 0 0-14.666 14.667v14.666h3.667V23.833a11 11 0 0 1 22 0v14.666h3.666V23.833A14.666 14.666 0 0 0 45.831 9.166Z"
                fill="#FEDD00"
              ></path>
              <path
                d="m27.5 23.834 3.667 3.667 3.666-3.667 3.667 3.667 3.667-3.667 3.666 3.667 3.667-3.667 3.667 3.667 3.666-3.667 3.667 3.667 3.667-3.667v42.167H27.5V23.834Z"
                fill="#38C948"
              ></path>
              <defs>
                <linearGradient
                  id="a"
                  x1="20.167"
                  y1="0"
                  x2="20.167"
                  y2="29.333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EEB445"></stop>
                  <stop offset="1" stopColor="#EF9E40"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h2>Activation of level 1 (s6)</h2>
            <span>You are buying:</span>
            <h3>lvl 1 — 50 USDT</h3>
            <p>Connection Check ( POLYGON )</p>
            <p>Balance Check ( 0 USDT )</p>
            <p>Balance Check ( 0 MATIC )</p>
            <button onClick={() => setActivePop(false)}>Proceed</button>
          </div>
        </ActivePopUp>
      )}

      <MainArea>
        <Header>
          <button>PLUS</button>
        </Header>
        <AreaInner>
          <Item className="active" onClick={() => setActivePop(true)}>
            <Head>
              <span>lvl 1</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                5
              </span>
            </Head>
            <Body>
              <p>Activate</p>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 2</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                10
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 3</span>
              <strong>s3</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                20
              </span>
            </Head>
            <Body>
              <svg
                width="114px"
                height="79px"
                viewBox="0 0 114 79"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    stroke="#8E8E8E"
                    x="36.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(0.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(44.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-2" transform="translate(88.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g
                    id="lines"
                    transform="translate(12.028300, 28.971700)"
                    stroke-dasharray="5"
                    stroke-linecap="round"
                  >
                    <line
                      x1="0"
                      y1="23.3218"
                      x2="25.2652"
                      y2="0"
                      stroke="#8E8E8E"
                      id="line-1"
                    ></line>{' '}
                    <line
                      x1="43.4717"
                      y1="23.5283"
                      x2="43.4717"
                      y2="11.5283"
                      stroke="#8E8E8E"
                      id="line-2"
                    ></line>{' '}
                    <line
                      x1="87.2652"
                      y1="24.0566"
                      x2="62"
                      y2="0.7348"
                      stroke="#8E8E8E"
                      id="line-3"
                    ></line>
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 4</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                40
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 5</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                80
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 6</span>
              <strong>s3</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                160
              </span>
            </Head>
            <Body>
              <svg
                width="114px"
                height="79px"
                viewBox="0 0 114 79"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    stroke="#8E8E8E"
                    x="36.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(0.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(44.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-2" transform="translate(88.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g
                    id="lines"
                    transform="translate(12.028300, 28.971700)"
                    stroke-dasharray="5"
                    stroke-linecap="round"
                  >
                    <line
                      x1="0"
                      y1="23.3218"
                      x2="25.2652"
                      y2="0"
                      stroke="#8E8E8E"
                      id="line-1"
                    ></line>{' '}
                    <line
                      x1="43.4717"
                      y1="23.5283"
                      x2="43.4717"
                      y2="11.5283"
                      stroke="#8E8E8E"
                      id="line-2"
                    ></line>{' '}
                    <line
                      x1="87.2652"
                      y1="24.0566"
                      x2="62"
                      y2="0.7348"
                      stroke="#8E8E8E"
                      id="line-3"
                    ></line>
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 7</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                320
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 8</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                640
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 9</span>
              <strong>s3</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                1280
              </span>
            </Head>
            <Body>
              <svg
                width="114px"
                height="79px"
                viewBox="0 0 114 79"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    stroke="#8E8E8E"
                    x="36.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(0.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(44.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-2" transform="translate(88.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g
                    id="lines"
                    transform="translate(12.028300, 28.971700)"
                    stroke-dasharray="5"
                    stroke-linecap="round"
                  >
                    <line
                      x1="0"
                      y1="23.3218"
                      x2="25.2652"
                      y2="0"
                      stroke="#8E8E8E"
                      id="line-1"
                    ></line>{' '}
                    <line
                      x1="43.4717"
                      y1="23.5283"
                      x2="43.4717"
                      y2="11.5283"
                      stroke="#8E8E8E"
                      id="line-2"
                    ></line>{' '}
                    <line
                      x1="87.2652"
                      y1="24.0566"
                      x2="62"
                      y2="0.7348"
                      stroke="#8E8E8E"
                      id="line-3"
                    ></line>
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 10</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                2560
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 11</span>
              <strong>s6</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                5120
              </span>
            </Head>
            <Body>
              <svg
                width="148px"
                height="84px"
                viewBox="0 0 148 84"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="lines"
                    transform="translate(7.058720, 27.684800)"
                    stroke-linecap="round"
                  >
                    <line
                      x1="23.9187127"
                      y1="7.2456585"
                      x2="48.4726188"
                      y2="7.2456585"
                      id="line-1"
                      stroke="#8E8E8E"
                      stroke-width="1.00000025"
                      stroke-dasharray="5.000001236924847"
                      transform="translate(36.195666, 7.245659) scale(-1, 1) rotate(-149.420802) translate(-36.195666, -7.245659) "
                    ></line>{' '}
                    <line
                      x1="106.25628"
                      y1="13.4913"
                      x2="85.11738"
                      y2="1"
                      id="line-2"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="5.32907052e-15"
                      y1="41.6105"
                      x2="12.23658"
                      y2="31.2565"
                      id="line-3"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="29.7495512"
                      y1="36.4335047"
                      x2="45.7789452"
                      y2="36.4335047"
                      id="line-4"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(37.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-37.764248, -36.433505) "
                    ></line>{' '}
                    <line
                      x1="87.99998"
                      y1="41.6105"
                      x2="100.23628"
                      y2="31.2565"
                      id="line-5"
                      stroke="#8E8E8E"
                      stroke-dasharray="5"
                    ></line>{' '}
                    <line
                      x1="117.749551"
                      y1="36.4335047"
                      x2="133.778945"
                      y2="36.4335047"
                      id="line-6"
                      stroke="#8E8E8E"
                      stroke-width="0.999999626"
                      stroke-dasharray="4.999998130899651"
                      transform="translate(125.764248, 36.433505) scale(-1, 1) rotate(-40.236358) translate(-125.764248, -36.433505) "
                    ></line>
                  </g>{' '}
                  <rect
                    id="lvl-0"
                    stroke="#8E8E8E"
                    x="53.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(17.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(105.500000, 40.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-0" transform="translate(0.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-1" transform="translate(44.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-2" transform="translate(88.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-2-3" transform="translate(132.500000, 69.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="13"
                      height="13"
                      rx="6.5"
                    ></rect>{' '}
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
          <Item>
            <Head>
              <span>lvl 12</span>
              <strong>s3</strong>
              <span>
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      d="M942.4 234.8C937.4 226.7 926.7 224.2 918.6 229.3C910.5 234.4 908 245 913.1 253.1C913.2 253.3 913.3 253.4 913.4 253.6C963.1 330.7 989.5 420.4 989.4 512.2C989.4 775.4 775.3 989.6 512 989.6C248.7 989.6 34.7001 775.3 34.7001 512.1C34.7001 248.9 248.8 34.7001 512.1 34.7001C569 34.6001 625.4 44.8001 678.8 64.6001C687.7 67.9001 697.7 63.4001 701 54.5001C704.3 45.6001 699.8 35.6001 690.9 32.3001C425.8 -66.3999 131 68.3001 32.3001 333.2C-66.3999 598.1 68.3001 893 333.2 991.7C598.1 1090.4 893 955.7 991.7 690.8C1048.1 539.6 1029.8 370.6 942.4 234.8Z"
                      fill="white"
                    />
                    <path
                      d="M796.1 128.4C808.2 137.4 819.9 146.9 831.1 157C838.1 163.5 849 163.1 855.5 156.1C862 149.1 861.6 138.2 854.6 131.7C854.5 131.6 854.3 131.4 854.2 131.3C842.2 120.5 829.6 110.2 816.7 100.7C809 95 798.2 96.6 792.6 104.3C786.8 111.9 788.4 122.7 796.1 128.4ZM763.1 334.4V212.5H263.8V334.4H447.9V414.1C298.3 420.8 185.6 450.3 185.6 485.7C185.6 521.1 298.3 550.6 447.9 557.3V813H579V557.2C728 550.4 840.1 520.9 840.1 485.6C840.1 450.3 728.1 420.9 579 414.1V334.4H763.1ZM783.8 478.5C783.8 501.8 696.7 521.3 579 526.7L571.4 527H570.6L563.5 527.3H562.7C557.4 527.5 552 527.6 546.6 527.8H546.3L539 527.9H536.9L531.1 528H494.7L489 527.9H487L480.2 527.8H479.5C471.4 527.6 463.5 527.4 455.7 527.1H455.6L447.8 526.8C329.6 521.5 241.9 501.9 241.9 478.5C241.9 455.1 329.6 435.6 447.8 430.2V504.2C468.3 505.3 490.2 505.9 512.8 505.9C535.8 505.9 558.1 505.3 578.9 504.2V430.5C696.6 435.7 783.8 455.2 783.8 478.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1024" height="1024" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                10240
              </span>
            </Head>
            <Body>
              <svg
                width="114px"
                height="79px"
                viewBox="0 0 114 79"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <rect
                    stroke="#8E8E8E"
                    x="36.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                  ></rect>{' '}
                  <g id="lvl-1-0" transform="translate(0.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-1" transform="translate(44.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g id="lvl-1-2" transform="translate(88.500000, 54.500000)">
                    <rect
                      stroke="#8E8E8E"
                      x="0"
                      y="0"
                      width="23"
                      height="23"
                      rx="11.5"
                    ></rect>{' '}
                  </g>{' '}
                  <g
                    id="lines"
                    transform="translate(12.028300, 28.971700)"
                    stroke-dasharray="5"
                    stroke-linecap="round"
                  >
                    <line
                      x1="0"
                      y1="23.3218"
                      x2="25.2652"
                      y2="0"
                      stroke="#8E8E8E"
                      id="line-1"
                    ></line>{' '}
                    <line
                      x1="43.4717"
                      y1="23.5283"
                      x2="43.4717"
                      y2="11.5283"
                      stroke="#8E8E8E"
                      id="line-2"
                    ></line>{' '}
                    <line
                      x1="87.2652"
                      y1="24.0566"
                      x2="62"
                      y2="0.7348"
                      stroke="#8E8E8E"
                      id="line-3"
                    ></line>
                  </g>
                </g>
              </svg>
            </Body>
          </Item>
        </AreaInner>
      </MainArea>
    </>
  );
}
