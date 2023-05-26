import React, { useEffect, useState } from 'react';
import { SignInFormContainer } from './styles';
import GradientButton from '../Shared/GradientButton';
import InputBoxWithIcon from './../Shared/InputBoxWithIcon/index';
import { EmailIcon, PasswordIcon } from '../Shared/SvgIcons';
import { useAuth } from '../../contexts/AuthContext';
import { useGlobal } from '../../contexts/GlobalContext';
import { useCustomWallet } from '../../contexts/WalletContext';
import { useTranslation } from 'react-i18next';

export const SignInForm = (props) => {
  const { goToSignUp, goToWallet, onClose } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useAuth();

  const { invokeServer } = useGlobal();
  const { wallet } = useCustomWallet();
  const{t}=useTranslation()
  const handleOnSignIn = () => {
    handleSignIn(username, password);
    onClose();
  };

  useEffect(() => {
    invokeServer('get', '/api/signin/?address=' + wallet.address)
      .then((res) => {
        if (res.data.result == 1) {
          setUsername(res.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SignInFormContainer>
      <InputBoxWithIcon
        type={'text'}
        name={'username'}
        placeholder={'Email/Username'}
        icon={<EmailIcon color={'#38c948'} />}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputBoxWithIcon
        type={'password'}
        name={'password'}
        placeholder={'Password'}
        icon={<PasswordIcon />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="forgot-password-label" onClick={() => {}}>
        {t("Forgot password?")}
      </div>
      <GradientButton label={'Continue'} handleClick={handleOnSignIn} />
      <div className="modal-divider-wrapper">
        <div className="modal-divider-text">Or</div>
      </div>
      <GradientButton
        label={'Connect with wallet'}
        isNaked
        handleClick={goToWallet}
      />
      <div className="sign-up-mode">{t("Don't have an account yet?")}</div>
      <GradientButton label={'Sign up'} isNaked handleClick={goToSignUp} />
    </SignInFormContainer>
  );
};
