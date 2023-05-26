import React, { useEffect, useState } from 'react';
import { NftCal, NftGrid, NftTotal } from './styles';
export default function NftCalculator(props) {
  const [cost, setCost] = useState(5);
  const [cycle, setCycle] = useState(15);

  function handleOne(one, two) {
    const newCost = one;
    const newCycle = two;
    setCost(newCost);
    setCycle(newCycle);
    document.getElementById('costNft').textContent = newCost;
    document.getElementById('cycleNft').textContent = newCycle;
  }

  const [cost2, setCost2] = useState(5);
  const [cycle2, setCycle2] = useState(20);

  function handleTwo(one, two) {
    const newCost2 = one;
    const newCycle2 = two;
    setCost2(newCost2);
    setCycle2(newCycle2);
    document.getElementById('costNft2').textContent = newCost2;
    document.getElementById('cycleNft2').textContent = newCycle2;
  }

  const [cost3, setCost3] = useState(8);
  const [cycle3, setCycle3] = useState(46);

  function handleThree(one, two) {
    const newCost3 = one;
    const newCycle3 = two;
    setCost3(newCost3);
    setCycle3(newCycle3);
    document.getElementById('costNft3').textContent = newCost3;
    document.getElementById('cycleNft3').textContent = newCycle3;
  }

  const [cost4, setCost4] = useState(10);
  const [cycle4, setCycle4] = useState(102);

  function handleFour(one, two) {
    const newCost4 = one;
    const newCycle4 = two;
    setCost4(newCost4);
    setCycle4(newCycle4);
    document.getElementById('costNft4').textContent = newCost4;
    document.getElementById('cycleNft4').textContent = newCycle4;
  }

  useEffect(() => {
    const numberLists = document.querySelectorAll('.number-list');

    numberLists.forEach((numberList) => {
      const numberListItems = numberList.getElementsByTagName('li');

      for (let i = 0; i < numberListItems.length; i++) {
        numberListItems[i].addEventListener('click', function () {
          const clickedNumber = parseInt(this.innerHTML);
          if (this.classList.contains('active')) {
            // clicked number is already active, so remove active class from all subsequent numbers
            for (let j = i + 1; j < numberListItems.length; j++) {
              numberListItems[j].classList.remove('active');
            }
          } else {
            // clicked number is not active, so add active class to all previous numbers
            for (let j = 0; j <= i; j++) {
              numberListItems[j].classList.add('active');
            }
          }
        });
      }
    });

    // calculate
  }, []);

  return (
    <>
      <NftCal>
        <h2>ZiMax Participant</h2>
        <h3>Calculator</h3>
        <p>
          Calculate your potential result from participating in ZiMax by
          selecting NFT levels to activate below. The results are calculated for
          1 cycle of all selected levels. All calculations are for informational
          purposes only, and are not a public offer.
        </p>
      </NftCal>
      <NftGrid>
        <div className="nftGridItem">
          <div className="nftGridItemHeading">
            <h2>
              <span>x3</span> ZiMax
            </h2>
            <p>
              Basic NFT level program, which is best for those who are
              self-reliant and prefer independent development.
            </p>
          </div>
          <div className="nftGridBody">
            <ul className="number-list">
              <li onClick={() => handleOne(5, 15)} className="active">
                1
              </li>
              <li onClick={() => handleOne(15, 45)}>2</li>
              <li onClick={() => handleOne(35, 105)}>3</li>
              <li onClick={() => handleOne(75, 225)}>4</li>
              <li onClick={() => handleOne(155, 465)}>5</li>
              <li onClick={() => handleOne(315, 945)}>6</li>
              <li onClick={() => handleOne(635, 1905)}>7</li>
              <li onClick={() => handleOne(1275, 3825)}>8</li>
              <li onClick={() => handleOne(2525, 7575)}>9</li>
              <li onClick={() => handleOne(5025, 15075)}>10</li>
              <li onClick={() => handleOne(10025, 30075)}>11</li>
              <li onClick={() => handleOne(19925, 59775)}>12</li>
            </ul>
            <div className="nftInfo">
              <p>
                Cost of all selected slots{' '}
                <strong>
                  {' '}
                  <span id="costNft">{cost}</span> USDT
                </strong>
              </p>
              <h2>
                Results in 1 cycle{' '}
                <strong>
                  <span id="cycleNft">{cycle}</span> USDT
                </strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="nftGridItem">
          <div className="nftGridItemHeading">
            <h2>
              <span>x4</span> ZiMax
            </h2>
            <p>
              More advanced program, designed for team work. Results are
              achieved here through direct partners, as well as through
              spillovers from other participants.
            </p>
          </div>
          <div className="nftGridBody">
            <ul className="number-list">
              <li onClick={() => handleTwo(5, 20)} className="active">
                1
              </li>
              <li onClick={() => handleTwo(15, 60)}>2</li>
              <li onClick={() => handleTwo(35, 140)}>3</li>
              <li onClick={() => handleTwo(75, 300)}>4</li>
              <li onClick={() => handleTwo(155, 620)}>5</li>
              <li onClick={() => handleTwo(315, 1260)}>6</li>
              <li onClick={() => handleTwo(635, 2540)}>7</li>
              <li onClick={() => handleTwo(1275, 5100)}>8</li>
              <li onClick={() => handleTwo(2525, 10100)}>9</li>
              <li onClick={() => handleTwo(5025, 20100)}>10</li>
              <li onClick={() => handleTwo(10025, 40100)}>11</li>
              <li onClick={() => handleTwo(19925, 79700)}>12</li>
            </ul>
            <div className="nftInfo">
              <p>
                Cost of all selected slots{' '}
                <strong>
                  {' '}
                  <span id="costNft">{cost2}</span> USDT
                </strong>
              </p>
              <h2>
                Results in 1 cycle{' '}
                <strong>
                  <span id="cycleNft">{cycle2}</span> USDT
                </strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="nftGridItem">
          <div className="nftGridItemHeading">
            <h2>
              <span>Zx</span> ZiMax
            </h2>
            <p>
              Program with enhanced team building and development opportunities.
            </p>
          </div>
          <div className="nftGridBody">
            <ul className="number-list">
              <li onClick={() => handleThree(8, 46)} className="active">
                1
              </li>
              <li onClick={() => handleThree(23, 133)}>2</li>
              <li onClick={() => handleThree(52, 302)}>3</li>
              <li onClick={() => handleThree(109, 632)}>4</li>
              <li onClick={() => handleThree(220, 1276)}>5</li>
              <li onClick={() => handleThree(431, 2500)}>6</li>
              <li onClick={() => handleThree(842, 4884)}>7</li>
              <li onClick={() => handleThree(1641, 9518)}>8</li>
              <li onClick={() => handleThree(3196, 18537)}>9</li>
              <li onClick={() => handleThree(6195, 35931)}>10</li>
              <li onClick={() => handleThree(11950, 69310)}>11</li>
              <li onClick={() => handleThree(21646, 125547)}>12</li>
            </ul>
            <div className="nftInfo">
              <p>
                Cost of all selected slots{' '}
                <strong>
                  {' '}
                  <span id="costNft">{cost3}</span> USDT
                </strong>
              </p>
              <h2>
                Results in 1 cycle{' '}
                <strong>
                  <span id="cycleNft">{cycle3}</span> USDT
                </strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="nftGridItem">
          <div className="nftGridItemHeading">
            <h2>
              <span>zGold</span> ZiMax
            </h2>
            <p>
              Exclusive program with ultimate opportunities for team work and
              development.
            </p>
          </div>
          <div className="nftGridBody">
            <ul className="number-list">
              <li onClick={() => handleFour(10, 102)} className="active">
                1
              </li>
              <li onClick={() => handleFour(30, 306)}>2</li>
              <li onClick={() => handleFour(60, 612)}>3</li>
              <li onClick={() => handleFour(110, 1122)}>4</li>
              <li onClick={() => handleFour(190, 1938)}>5</li>
              <li onClick={() => handleFour(320, 3264)}>6</li>
              <li onClick={() => handleFour(530, 5406)}>7</li>
              <li onClick={() => handleFour(870, 8874)}>8</li>
              <li onClick={() => handleFour(1420, 14484)}>9</li>
              <li onClick={() => handleFour(2310, 23562)}>10</li>
              <li onClick={() => handleFour(3750, 38250)}>11</li>
              <li onClick={() => handleFour(6080, 62016)}>12</li>
              <li onClick={() => handleFour(9850, 100470)}>13</li>
              <li onClick={() => handleFour(15950, 162690)}>14</li>
              <li onClick={() => handleFour(25820, 263364)}>15</li>
            </ul>
            <div className="nftInfo">
              <p>
                Cost of all selected slots{' '}
                <strong>
                  {' '}
                  <span id="costNft">{cost4}</span> USDT
                </strong>
              </p>
              <h2>
                Results in 1 cycle{' '}
                <strong>
                  <span id="cycleNft">{cycle4}</span> USDT
                </strong>
              </h2>
            </div>
          </div>
        </div>
      </NftGrid>
      <NftTotal>
        <h2>
          Total cost <strong>{cost + cost2 + cost3 + cost4} USDT</strong>
        </h2>
        <h2>
          Total profit <strong>{cycle + cycle2 + cycle3 + cycle4} USDT</strong>
        </h2>
      </NftTotal>
    </>
  );
}
