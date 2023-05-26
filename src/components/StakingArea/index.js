import React, { useEffect, useState }  from 'react';
import {
  MainArea,
  Header,
  Item,
  Profile,
  ProfileContent,
  Nav,
  Body,
  LockArea,
  LockInner,
  LockInnerLeft,
  LockInnerRight,
  YourLock,
  UnLockArea,
  InfoArea,
  LockInput,
  LockInnerButton,
  SwapContent,
  MainContainer,
} from './styles';
import EPX from '../../assets/images/epx.png';
import zmzabi from '../../abis/ZMZ_token.json';
import stakingabi from '../../abis/Staking.json';
import { useCustomWallet } from '../../contexts/WalletContext';
import { ethers } from 'ethers';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';


const ZMZ_CONTRACT_ADDRESS = '0xA080dCB3350d99320Bf67A997D7f876284727ec7';
const ZMZ_STAKING_CONTRACT_ADDRESS = '0x231E8DC7ee94103C7E24C9a0EFF764d8f83c2382';

export default function MultiplyArea() {
  const [lock, setLock] = useState(true);
  const [unlock, setUnlock] = useState(false);
  const [info, setInfo] = useState(false);
  const [stake1, setStake1] = useState('6');
  const [stake2, setStake2] = useState('1');
  const [stake3, setStake3] = useState('2');
  const [optionSelected, setOptionSelected] = useState('');
  const [checked, setChecked] = useState(false);
  const [stakingValue, setStakingValue] = useState('');
  const [stakingIdValue, setStakingIdValue] = useState([]);
  const [stakingData, setStakingData] = useState([]);
  const [timestamp, setTimestamp] = useState(Date.now());
  const { wallet } = useCustomWallet();

  console.log("🚀 ~ LevelsArea ~ wallet", wallet);

  const{t}=useTranslation()

  const ShowLock = () => {
    setLock(true);
    setUnlock(false);
    setInfo(false);
  };
  const ShowUnlock = () => {
    setUnlock(true);
    setLock(false);
    setInfo(false);
  };
  const ShowInfo = () => {
    setInfo(true);
    setUnlock(false);
    setLock(false);
  };


  useEffect(async () => {

    viewStakeZIMAX()

}, []);

setTimeout(() => {
viewStakeZIMAX()
}, 60000);

setTimeout(() => {
setTimestamp(Date.now())
}, 300000);


const handleChange = (val) => {
setOptionSelected(val);
};

const ZmzContract = async () => {
try {
 const provider = new ethers.providers.Web3Provider(window.ethereum);
 const signer = provider.getSigner();
 const ZmzContract = new ethers.Contract(
   ZMZ_CONTRACT_ADDRESS,
   zmzabi,
   signer
 );
 return ZmzContract;
} catch (error) {
 console.log(error);
}
};

const ZmzStakingContract = async () => {
try {
 const provider = new ethers.providers.Web3Provider(window.ethereum);
 const signer = provider.getSigner();
 const ZmzStakingContract = new ethers.Contract(
   ZMZ_STAKING_CONTRACT_ADDRESS,
   stakingabi,
   signer
 );
 return ZmzStakingContract;
} catch (error) {
 console.log(error);
}
};


const handleEstimateZIMAX = async (val) => {
try {

 setStakingValue(val);

} catch (error) {
  console.log(error);
}
};


const handleMaxZIMAX = async () => {

try {

 if (!wallet.address) {

   setStakingValue(0);

   return null;
 }
 let _ZmzContract = await ZmzContract();
 console.log('contract---', _ZmzContract);
 let _getMaxZimax = await _ZmzContract.balanceOf(wallet.address);
 console.log('val', _getMaxZimax.toString());
 console.log('getetet', (_getMaxZimax.toString() / 10 ** 5));
 setStakingValue((_getMaxZimax.toString() / 10 ** 5));

} catch (error) {
  console.log(error);
}
};


const handleApproveZMZ = async () => {
console.log("userStakingValue", stakingValue)
try {
 let _ZmzContract = await ZmzContract();
 console.log('contract---', _ZmzContract);
 console.log("🚀 ~ handleApproveZMZ ~ estimateValue", stakingValue)
 let _approve = await _ZmzContract.approve(
   ZMZ_STAKING_CONTRACT_ADDRESS,
   ethers.utils.parseEther(stakingValue)
 );
 let waitForTx = await _approve.wait();
 if (waitForTx) {
   console.log('wait handleApproveZIMAX', waitForTx);

   toast.success('Approved successfull.');
 }
} catch (error) {
 console.log(error);
}
};
const handleStakeZimax = async () => {
console.log("userStakingValue", stakingValue)
console.log("userStakingTime", optionSelected)
try {
let _ZmzStakingContract = await ZmzStakingContract();
if (stakingValue <= 0) {
 return toast.error('Value should be positive.');
}
let _ZmzContract = await ZmzContract();
 console.log('contract---', _ZmzContract);
let _getMaxZimax = await _ZmzContract.balanceOf(wallet.address);
console.log('val', _getMaxZimax.toString());
 console.log('getetet', (_getMaxZimax.toString() / 10 ** 5));
let zimaxStakeVal = stakingValue * 10 ** 5;
 console.log("🚀 ~ stakeZIMAX ~ zimaxStakeVal", zimaxStakeVal)
 console.log( _ZmzStakingContract)
 let _buy = await _ZmzStakingContract.stakeZIMAX(
   optionSelected,   zimaxStakeVal
 );
 let waitForTx = await _buy.wait();
 if (waitForTx) {
   toast.success('Transaction successfull.');
 }
 console.log('wait stakeZIMAX', waitForTx);

 viewStakeZIMAX()
} catch (error) {
 console.log(error);
}
};

const viewStakeZIMAX = async () => {
try {

 let _ZmzStakingContract = await ZmzStakingContract();
 console.log('contract---', _ZmzStakingContract);
 let _getMaxZimaxStake = await _ZmzStakingContract.getUserStakeId(wallet.address);
 console.log('val', _getMaxZimaxStake.toString());
let  myString = _getMaxZimaxStake.toString();
let myStringArray = myString.split(',');
let str = '';
for ( let i = 0; i < myStringArray.length; i++ ) {
 let _getZimaxStakeDatar0 =  await _ZmzStakingContract.stake(wallet.address,myStringArray[i] )

let  myString0 = _getZimaxStakeDatar0.toString();

str+=myString0 + ',' + myStringArray[i] + ',';
let myStringArray0 = myString0.split(',');
}
str = str.substring(0, str.length - 1);
let myStringArrayStr = str.split(',');
let result = [];
let dstr;
for(let i=0; i < myStringArrayStr.length; i+=1) {
  if((i % 7 == 0)) {
   if(myStringArrayStr[i+1] == 6) {
       dstr = '  Months';
   } else if (myStringArrayStr[i+1] == 1) {
     dstr = '  Year';
   } else if (myStringArrayStr[i+1] == 2) {
     dstr = '  Years'
   }
   let pstr = myStringArrayStr[i+1].concat(dstr);
   let  date1 = new Date(myStringArrayStr[i+2] * 1000);
let formattedDate1 = date1.toLocaleString();
let  date2 = new Date(myStringArrayStr[i+3] * 1000);
let formattedDate2 = date2.toLocaleString();

   result.push({amount: (myStringArrayStr[i]/(10 ** 5)), lock_period: pstr, lock_time : formattedDate1, unlock_time : formattedDate2, reward : (myStringArrayStr[i+4]/ (10 ** 5)), claimed : myStringArrayStr[i+5], stakeId :myStringArrayStr[i+6] })
  }
}

setStakingData(result);
setStakingIdValue(_getMaxZimaxStake.toString() );

} catch (error) {
 console.log(error);
}
};


const handleUnstakeZimax = async (val) => {
console.log("userStakingID", val)
try {

 let _ZmzStakingContract = await ZmzStakingContract();
if (val < 0) {
 return toast.error('Value should be positive.');
}

 console.log("🚀 ~ UnstakeZIMAX ~ zimaxUnStakeVal", val)
 let _buy = await _ZmzStakingContract.unStakeZIMAX(
   val
 );
 let waitForTx = await _buy.wait();
 if (waitForTx) {
   toast.success('Transaction successfull.');
 }
 console.log('wait UnstakeZIMAX', waitForTx);

} catch (error) {
 console.log(error);
}
};




  return (
    <>
      <ToastContainer />
      <SwapContent>
        <h2>
          ZiMax Bank
        </h2>
      </SwapContent>
      <SwapContent>
        <h2>
          {t("Lock your ZiMax earn up to 98.4% more profit")}
        </h2>
      </SwapContent>
      <MainContainer>
        <MainArea>
          <Header>
            <Item>
              <Profile>
                <img src={EPX} width="31" height="33" alt="ZiMax Price" />
                <ProfileContent>
                  <h2>{t("ZiMax")}</h2>
                  <p>{t("LOCK ZiMax")}</p>
                </ProfileContent>
              </Profile>
            </Item>
            <Item>
              <ul>
                <li>
                  <span>{t("Bonus APR")}</span>
                  <p>{t("15 to 60%")}</p>
                </li>
                <li>
                  <span>{t("Locked ZiMax")}</span> <strong>{t("0.0 ZiMax")}</strong>
                </li>
                <li>
                  <span>{t("TVL")}</span>
                  <h2>{t("$0.00")}</h2>
                </li>
                <li>
                  <span>{t("Claimable")}</span>
                  <strong>{t("$0.00")}</strong>
                </li>
              </ul>
            </Item>
            <Item>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 192 512"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
              </svg>
            </Item>
          </Header>
          <Nav>
            <button className={lock ? 'active' : ''} onClick={ShowLock}>
              {t("LOCK")}
            </button>
            <button className={unlock ? 'active' : ''} onClick={ShowUnlock}>
              {t("UNLOCK")}
            </button>
            <button className={info ? 'active' : ''} onClick={ShowInfo}>
              {t("INFO")}
            </button>
          </Nav>
          <Body>
            {lock && (
              <LockArea>
                <h4>
                  {t("lock your ZiMax tokens any period from 6 month to 2 years to receive higher APY.")} <br /> <br />
                  <label>
                    <input type="checkbox" checked={stake1 == optionSelected ? "checked" : ""} value={stake1} name ="stakeTime" onChange={(e) =>handleChange((e.target.value))} /> {t("6 Months 15% Bonus")}
                  </label>
                  <label>
                    <input type="checkbox" checked={stake2 == optionSelected ? "checked" : ""} value={stake2} name ="stakeTime" onChange={(e) =>handleChange((e.target.value))} /> {t("1 Year 40% Bonus")}
                  </label>
                  <label>
                    <input type="checkbox" checked={stake3  == optionSelected ? "checked" : ""} value={stake3} name ="stakeTime"  onChange={(e) =>handleChange((e.target.value))}  /> {t("2 Years 60% Bonus")}
                  </label>
                </h4>
                <LockInner>
                  <LockInnerLeft>
                    <h5>
                      {t("Lock Your Zimax")}
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="action-icon"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="416"
                            height="288"
                            x="48"
                            y="144"
                            fill="none"
                            stroke-linejoin="round"
                            stroke-width="32"
                            rx="48"
                            ry="48"
                          ></rect>
                          <path
                            fill="none"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                          ></path>
                          <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                        </svg>
                        {t("Your Wallet ZiMax Balance 0.00")}
                      </span>
                    </h5>
                    <LockInput>
                      <input
                      placeholder='0'
                      type='number'
                      value={stakingValue}
                      onChange={(e) => handleEstimateZIMAX(e.target.value)}
                       />
                      <button onClick={handleMaxZIMAX}>{t("MAX")}</button>
                    </LockInput>
                  </LockInnerLeft>
                  <LockInnerRight>
                    <strong>
                      <svg
                        x="25%"
                        stroke="#38C948"
                        fill="#38C948"
                        stroke-width="0"
                        viewBox="0 0 40 40"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <circle cx="20" cy="20" r="20"></circle>
                          <text
                            fill="white"
                            font-weight="700"
                            text-anchor="middle"
                            x="50%"
                            y="50%"
                            alignment-baseline="middle"
                            font-size="18px"
                          >
                            1
                          </text>
                        </g>
                      </svg>
                      <span></span>
                      <svg
                        x="25%"
                        stroke="#38C948"
                        fill="#38C948"
                        stroke-width="0"
                        viewBox="0 0 40 40"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <circle cx="20" cy="20" r="20"></circle>
                          <text
                            fill="white"
                            font-weight="700"
                            text-anchor="middle"
                            x="50%"
                            y="50%"
                            alignment-baseline="middle"
                            font-size="18px"
                          >
                            2
                          </text>
                        </g>
                      </svg>
                    </strong>
                    <LockInnerButton>
                    <button onClick={handleApproveZMZ}>{t("APPROVE")}</button>
                      <button onClick={handleStakeZimax}>{t("LOCK")}</button>
                    </LockInnerButton>
                  </LockInnerRight>
                </LockInner>
                <YourLock>
                  <h6>{t("Your Locked ZiMax")}</h6>
                  <ul>
                  <li>{t("Amount Locked")}</li>
                    <li>{t("Locked On")}</li>
                    <li>{t('Locked')}</li>
                    <li>{t("Total Value")}</li>
                    <li>{t("Unlocks On")}</li>
                  </ul>
                  {  stakingData.map((item) => (
                  <ul>
                      <li>{item.amount} ZMX</li>
                      <li> {item.lock_time} </li>
                      <li>{item.lock_period}  </li>
                      <li>{item.reward} ZMX</li>
                      <li> {item.unlock_time}</li>
                  </ul>
              ))}

                </YourLock>
              </LockArea>
            )}
            {unlock && (
              <UnLockArea>
                <h4>
                  {t("You can select and claim your unlocked ZiMax below.")} <br />
                  {t("This will be sent to your wallet and can be staked or locked again.")}
                </h4>
                <p>
                  {t("Note: You can choose to leave your ZiMax locked and you will continue to earn higher rewards.")}
                  <br />
                  <br />
                  {t("Early Withdraw Fee 80%")}
                </p>
                <ul>
                <li>{t("Amount Locked")}</li>
                    <li>{t("Locked On")}</li>
                    <li>{t('Locked')}</li>
                    <li>{t("Total Value")}</li>
                    <li>{t("Unlocks On")}</li>
                    <li>{t("Claim")}</li>
                    <li>{t("Action")}</li>
                </ul>
                {  stakingData.map((item) => (
                  <ul>
                  <li>{item.amount} ZMX</li>
                  <li> {item.lock_time} </li>
                  <li>{item.lock_period}  </li>
                  <li>{item.reward} ZMX</li>
                  <li> {item.unlock_time}</li>
                  <li> {item.claimed}</li>
               <li> <button disabled={ item.unlock_time > timestamp  ?  true : false} onClick={() =>handleUnstakeZimax(item.stakeId)}>{t("UNLOCK ")}</button> </li>
                </ul>
     ))}

              </UnLockArea>
            )}
            {info && (
              <InfoArea>
                <ul>
                  <li>
                    <strong>{t("ZiMax Contract:")}</strong>
                    {t("0xA080dCB3350d99320Bf67A997D7f876284727ec7")}
                  </li>
                  <li>
                    <strong> {t("Bank Contract:")}</strong>
                    {t("0x231e8dc7ee94103c7e24c9a0eff764d8f83c2382")}
                  </li>
</ul>
              </InfoArea>
            )}
          </Body>
        </MainArea>
      </MainContainer>
    </>
  );
}
