import React, { useState, useEffect } from "react";
import { useSaleItem } from "../../../contexts/SaleContext";
import GradientButton from "../GradientButton";
import BigNumber from 'bignumber.js'

import { 
  CheckoutFormContainer, 
  WelComeCheckout, 
  CheckoutDetail,
  CheckoutTerms
} from "./styles";
import { useContract } from "../../../contexts/ContractContext";
import { useCustomWallet } from "../../../contexts/WalletContext";
import { useTranslation } from "react-i18next";

export const CheckoutForm = (props) => {
  const { handleProcess } = props;
const {t}=useTranslation()
  const { saleInfo, nftItem } = useSaleItem();
  const { getTokenBalance } = useContract();
  const { getWalletAddressBySessionKey } = useCustomWallet();

  const [myBalance, setMyBalance] = useState(0.0);

  const serviceFeeCalculate = (s) => {
    return BigNumber(s.price).times(s.fee).div(100).toString();
  }

  const totalAmountCalculate = (s) => {
    return BigNumber(s.price).times(s.copy).toString();
  }

  const payAmountCalculate = (s) => {
    return BigNumber(serviceFeeCalculate(s)).plus(BigNumber(totalAmountCalculate(s))).toString();
  }

  useEffect(() => {
    if (saleInfo?.payment !== undefined) {
      getTokenBalance(saleInfo.payment, getWalletAddressBySessionKey())
      .then(r => {
        setMyBalance(r);
      })
      .catch(err => {
        console.log(`${err.message}`);
      })
    }
  }, [saleInfo, getWalletAddressBySessionKey])

  return (
    <CheckoutFormContainer>
      <WelComeCheckout>
        <div className="welcome-text">{t("You are about to purchase")}</div>
        <div className="user-name"><span>{saleInfo?.copy} {t("x")}</span> {nftItem?.title}</div>
      </WelComeCheckout>
      <CheckoutDetail>
        <div className="flex-div">
          <div className="purchase-label">{t("Your purchase")}</div>
          <div className="purchase-name">{saleInfo.paymentName}</div>
        </div>

        <div className="divider"></div>

        <div className="flex-div">
          <div className="purchase-label">{t("Service Fee")}</div>
          <div className="purchase-desc">{serviceFeeCalculate(saleInfo)}</div>
        </div>
        <div className="flex-div">
          <div className="purchase-label">{t("Total Amount")}</div>
          <div className="purchase-desc">{totalAmountCalculate(saleInfo)}</div>
        </div>
        <div className="flex-div">
          <div className="purchase-label">{t("You Will Pay")}</div>
          <div className="purchase-desc">{payAmountCalculate(saleInfo)}</div>
        </div>
        <div className="flex-div">
          <div className="purchase-label">{t("Your Account Balance")}</div>
          <div className="purchase-desc">{myBalance}</div>
        </div>
      </CheckoutDetail>
      <CheckoutTerms>
        {'By clicking the below button to purchase, you confirm that you have done your own due diligence to verify the authenticity of this NFT & assume any incurred loss resulting from this purchase. Network fees may be assessed at payment processing.'}
      </CheckoutTerms>
      <GradientButton
        label={'Proceed to Payment'} 
        height={'50px'} 
        width={'316px'}
        fontSize={'22px'}
        isNoPadding
        handleClick={() => handleProcess()} 
      />
    </CheckoutFormContainer>
  );
};