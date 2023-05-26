import CountUp from 'react-countup';
import Countdown from 'react-countdown';
import { useState, useEffect } from 'react';
import {
  HeroArea,
  TicketNow,
  TicketWallet,
  TicketFinished,
  PlayArea,
  BuyTicket,
} from './styles';
import badgeTicket from '../../assets/ticket-badge.svg';
import star1 from '../../assets/star-small.png';
import star2 from '../../assets/star-big.png';
import star3 from '../../assets/ticket-l.png';
import star4 from '../../assets/three-stars.png';
import star5 from '../../assets/ticket-r.png';
import num3 from '../../assets/number/3.svg';
import num9 from '../../assets/number/9.svg';
import num8 from '../../assets/number/8.svg';
import num5 from '../../assets/number/5.svg';
import num6 from '../../assets/number/6.svg';
import num7 from '../../assets/number/7.svg';
import chat1 from '../../assets/chat1.png';
import chat2 from '../../assets/chat2.png';
export default function DefiLottery() {
  const renderer = ({ hours, minutes }) => {
    return (
      <span className="hoursTimes">
        {hours}
        <sub> h</sub> &nbsp;
        {minutes}
        <sub> m</sub>
      </span>
    );
  };

  const [lotteryDetails, setLotteryDetails] = useState(false);
  const [lotteryDetails2, setLotteryDetails2] = useState(false);
  const [lotteryRound, setLotteryRound] = useState(false);
  const [buyTicketBox, setBuyTicketBox] = useState(false);

  const toggleBuyTicketBox = () => {
    setBuyTicketBox(!buyTicketBox);
  };
  const toggleRound = () => {
    setLotteryRound(!lotteryRound);
  };

  const toggleDetails = () => {
    setLotteryDetails(!lotteryDetails);
  };

  const toggleDetails2 = () => {
    setLotteryDetails2(!lotteryDetails2);
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run the effect only once, when the component is mounted

  const formattedDate = time.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <>
      {buyTicketBox && (
        <BuyTicket>
          <div className="buyTicketInner">
            <h2>
              Buy Tickets{' '}
              <svg
                onClick={toggleBuyTicketBox}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </h2>
            <h3>
              Buy:{' '}
              <strong>
                Tickets <img src={star5} alt="" />
              </strong>
            </h3>
            <div className="buyBmax">
              <input type="tel" placeholder="0" />
              <p>~0.00 ZMX</p>
            </div>
            <h3>
              Cost (ZMX) <span>0 ZMX</span>
            </h3>
            <h3>
              0% Bulk discount
              <span>~0 ZMX</span>
            </h3>
            <h4>
              You pay
              <strong>~0 ZMX</strong>
            </h4>
            <button>Connect Wallet</button>
            <h5>
              "Buy Instantly" chooses random numbers, with no duplicates among
              your tickets. Prices are set before each round starts, equal to $5
              at that time. Purchases are final.
            </h5>
          </div>
        </BuyTicket>
      )}

      <HeroArea>
        <h2>The ZiMaxLottery</h2>
        <h3>
          $<CountUp end={83894} />
        </h3>
        <h4>in prizes!</h4>
        <img
          src={badgeTicket}
          onClick={toggleBuyTicketBox}
          className="badgeTicket"
          alt="badgeTicket"
        />
        <ul>
          <li>
            <img src={star1} alt="star1" />
          </li>
          <li>
            <img src={star2} alt="star1" />
          </li>
          <li>
            <img src={star3} alt="star1" />
          </li>
          <li>
            <img src={star4} alt="star1" />
          </li>
          <li>
            <img src={star5} alt="star1" />
          </li>
        </ul>
      </HeroArea>
      <TicketNow>
        <h2>Get your tickets now!</h2>
        <p className="ticketClock">
          <Countdown date={Date.now() + 10000000000} renderer={renderer} />
          &nbsp;&nbsp;&nbsp;&nbsp; until the draw
        </p>
        <div className="ticketMainArea">
          <div className="ticketHeading">
            Next Draw <span>#818 | Draw: {formattedDate}</span>
          </div>
          <div className="ticketBody">
            <h2>
              Prize Pot{' '}
              <span>
                ~$83,411 <strong>20,568 ZMX</strong>
              </span>
            </h2>
            <h2>
              Your tickets{' '}
              <button onClick={toggleBuyTicketBox}>Buy Tickets</button>
            </h2>
          </div>
          <div className="ticketFooter">
            {lotteryDetails ? (
              <div className="ticket-footer-details">
                <p>
                  Match the winning number in the same order to share prizes.
                  Current prizes up for grabs:
                </p>
                <ul>
                  <li>
                    <strong>Match first 1</strong>{' '}
                    <p>
                      <CountUp end={425} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={1731} />
                    </span>
                  </li>
                  <li>
                    <strong>Match first 2</strong>{' '}
                    <p>
                      <CountUp end={638} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={2597} />
                    </span>
                  </li>
                  <li>
                    <strong>Match first 3</strong>{' '}
                    <p>
                      <CountUp end={1063} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={4328} />
                    </span>
                  </li>
                  <li>
                    <strong>Match first 4</strong>{' '}
                    <p>
                      <CountUp end={2125} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={8656} />
                    </span>
                  </li>
                  <li>
                    <strong>Match first 5</strong>{' '}
                    <p>
                      <CountUp end={4250} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={17313} />
                    </span>
                  </li>
                  <li>
                    <strong>Match first 6</strong>{' '}
                    <p>
                      <CountUp end={8501} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={34619} />
                    </span>
                  </li>
                  <li>
                    <strong className="red-burn">Burn</strong>{' '}
                    <p>
                      <CountUp end={4250} /> ZMX
                    </p>
                    <span>
                      ~$ <CountUp end={17309} />
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              ''
            )}

            <button>
              {lotteryDetails ? (
                <div onClick={toggleDetails}>
                  Hide
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </div>
              ) : (
                <div onClick={toggleDetails}>
                  Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </div>
      </TicketNow>
      <TicketWallet>
        <h3>
          Connect your wallet <br /> to check if you've won!
        </h3>
        <button onClick={toggleBuyTicketBox}>Connect Wallet</button>
        <ul>
          <li>
            <img src={star3} alt="star1" />
          </li>
          <li>
            <img src={star5} alt="star1" />
          </li>
        </ul>
      </TicketWallet>
      <TicketFinished>
        <h2>Finished Rounds</h2>
        <div className="ticketFinishedArea">
          <button
            onClick={toggleRound}
            className={!lotteryRound ? 'active' : ''}
          >
            All History
          </button>
          <button
            onClick={toggleRound}
            className={lotteryRound ? 'active' : ''}
          >
            your history
          </button>
        </div>
        <div className="roundArea">
          {!lotteryRound && (
            <div className="round">
              <h2>
                Round <span>817</span>
              </h2>
              <p>Drawn {formattedDate}</p>

              <div className="round-number">
                <h3>Winning Number</h3>
                <ul>
                  <li>
                    <img src={num3} alt="number" />
                  </li>
                  <li>
                    <img src={num9} alt="number" />
                  </li>
                  <li>
                    <img src={num8} alt="number" />
                  </li>
                  <li>
                    <img src={num5} alt="number" />
                  </li>
                  <li>
                    <img src={num6} alt="number" />
                  </li>
                  <li>
                    <img src={num7} alt="number" />
                  </li>
                </ul>
              </div>
              <div className="ticketFooter">
                {lotteryDetails2 ? (
                  <div className="ticket-footer-details">
                    <p>
                      Match the winning number in the same order to share
                      prizes. Current prizes up for grabs:
                    </p>
                    <ul>
                      <li>
                        <strong>Match first 1</strong>{' '}
                        <p>
                          <CountUp end={425} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={1731} />
                        </span>
                      </li>
                      <li>
                        <strong>Match first 2</strong>{' '}
                        <p>
                          <CountUp end={638} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={2597} />
                        </span>
                      </li>
                      <li>
                        <strong>Match first 3</strong>{' '}
                        <p>
                          <CountUp end={1063} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={4328} />
                        </span>
                      </li>
                      <li>
                        <strong>Match first 4</strong>{' '}
                        <p>
                          <CountUp end={2125} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={8656} />
                        </span>
                      </li>
                      <li>
                        <strong>Match first 5</strong>{' '}
                        <p>
                          <CountUp end={4250} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={17313} />
                        </span>
                      </li>
                      <li>
                        <strong>Match first 6</strong>{' '}
                        <p>
                          <CountUp end={8501} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={34619} />
                        </span>
                      </li>
                      <li>
                        <strong className="red-burn">Burn</strong>{' '}
                        <p>
                          <CountUp end={4250} /> ZMX
                        </p>
                        <span>
                          ~$ <CountUp end={17309} />
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ''
                )}

                <button>
                  {lotteryDetails2 ? (
                    <div onClick={toggleDetails2}>
                      Hide
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={toggleDetails2}>
                      Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
          {lotteryRound && (
            <div className="round-history">
              <h2>Rounds</h2>
              <div className="round-history-body">
                <p>Connect your wallet to check your history</p>
                <button>Connect Wallet</button>
              </div>
              <div className="round-footer">
                <p>Only showing data for Lottery V2</p>
              </div>
            </div>
          )}
        </div>
      </TicketFinished>
      <PlayArea>
        <h2>How to Play</h2>
        <p>
          If the digits on your tickets match the winning numbers in the correct
          order, you win a portion of the prize pool. Simple!
        </p>
        <ul>
          <li>
            <span>STEP 1</span>
            <h2>Buy Tickets</h2>
            <p>
              Prices are set when the round starts, equal to 5 USD in ZMX per
              ticket.
            </p>
          </li>
          <li>
            <span>STEP 2</span>
            <h2>Wait for the Draw</h2>
            <p>
              There is one draw every day alternating between 0 AM UTC and 12 PM
              UTC.
            </p>
          </li>
          <li>
            <span>STEP 3</span>
            <h2>Check for Prizes</h2>
            <p>
              Once the round’s over, come back to the page and check to see if
              you’ve won!
            </p>
          </li>
        </ul>
        <div className="playDetails">
          <div className="playDetailsLeft">
            <h2>Winning Criteria</h2>
            <h3>
              The digits on your ticket must match in the correct order to win.
            </h3>
            <p>Here’s an example lottery draw, with two tickets, A and B.</p>
            <ul>
              <li>
                Ticket A: The first 3 digits and the last 2 digits match, but
                the 4th digit is wrong, so this ticket only wins a “Match first
                3” prize.
              </li>
              <li>
                Ticket B: Even though the last 5 digits match, the first digit
                is wrong, so this ticket doesn’t win a prize.
              </li>
            </ul>

            <p>
              Prize brackets don’t ‘stack’: if you match the first 3 digits in
              order, you’ll only win prizes from the ‘Match 3’ bracket, and not
              from ‘Match 1’ and ‘Match 2’.
            </p>
          </div>
          <div className="playDetailsRight">
            <img src={chat1} alt="chat" />
          </div>
        </div>
        <div className="playDetails">
          <div className="playDetailsLeft">
            <h2>Prize Funds</h2>
            <p>The prizes for each lottery round come from three sources:</p>
            <h3>Ticket Purchases</h3>
            <ul>
              <li>
                100% of the ZMX paid by people buying tickets that round goes
                back into the prize pools.
              </li>
            </ul>
            <h3>Rollover Prizes</h3>
            <ul>
              <li>
                After every round, if nobody wins in one of the prize brackets,
                the unclaimed ZMX for that bracket rolls over into the next
                round and are redistributed among the prize pools.
              </li>
            </ul>
            <h3>ZMX Injections</h3>
            <ul>
              <li>
                An average total of 35,000 ZMX from the treasury is added to
                lottery rounds over the course of a week. This ZMX is of course
                also included in rollovers! Read more in our guide to ZMX
                Tokenomics
              </li>
            </ul>
          </div>
          <div className="playDetailsRight">
            <img src={chat2} alt="chat" />
          </div>
        </div>
      </PlayArea>
    </>
  );
}
