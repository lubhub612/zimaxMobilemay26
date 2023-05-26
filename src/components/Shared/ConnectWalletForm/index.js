import React from "react";
import IconButton from "../IconButton";
import { ConnectWalletFormContainer } from "./styles";
import MetaWalletIcon from '../../../assets/images/Metamask-Icon.png';
import ConnectWalletIcon from '../../../assets/images/ConnectWallet-icon.png';
import TrustWalletIcon from '../../../assets/images/TrustWallet-icon.png';
import { useCustomWallet } from "../../../contexts/WalletContext";
import { useTranslation } from "react-i18next";

export const ConnectWalletForm = (props) => {
  const { handleClose } = props;

  const {connectWallet, connectWalletByConfig} = useCustomWallet();
const{t}=useTranslation()
  const onMetamask = async () => {
    await connectWallet("injected");
    if (await connectWalletByConfig()) {
      console.log("local node selected");
    }
    await handleClose();
  }

  const onWalletConnect = async () => {
    await connectWallet("walletconnect");
    await handleClose();
  }

  const onTrustWallet = async () => {
    await connectWallet('injected');
    await handleClose();
  }

  return (
    <ConnectWalletFormContainer>
      <div className="welcome-wallet">
        {t("Connect with one of our availble wallet providers or create a new one")}
      </div>
      <div className="wallet-list">
        <IconButton 
          label={'Metamask'} 
          icon={MetaWalletIcon}
          isPopular={true}
          handleOnClick={onMetamask}
        />
        <IconButton 
          label={'WalletConnect'} 
          icon={ConnectWalletIcon}
          handleOnClick={onWalletConnect}
        />
        <IconButton 
          label={'Trust Wallet'} 
          icon={TrustWalletIcon}
          handleOnClick={onTrustWallet}
        />
      </div>
    </ConnectWalletFormContainer>
  );
};