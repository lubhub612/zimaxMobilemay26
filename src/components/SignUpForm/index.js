import React, { useState } from 'react';
import GradientButton from '../Shared/GradientButton';
import InputBoxWithIcon from './../Shared/InputBoxWithIcon/index';
import { UserAvatraIcon, EmailIcon, PasswordIcon } from '../Shared/SvgIcons';
import CheckBox from '../Shared/CheckBox';
import { SignUpFormContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export const SignUpForm = (props) => {
  const { onCreateConfirm, onClose } = props;

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [termIds, setTermIds] = useState([]);

  const { handleSignUp } = useAuth();
  const{t}=useTranslation()
   const defaultTermsList = [
    { id: 1, name: 'Sign Up As Creator' },
    { id: 2, name: 'I agree to ZiMax’s Terms of Service' },
    { id: 3, name: 'I opt on to recive offers from ZiMax to my email address' },
  ];

  const onSignUp = () => {
    handleSignUp(email, username, password);
    onClose();
  };

  const handleChangeTermIds = (id) => {
    let _termIds = [];
    const found = termIds.find((priceId) => priceId === id);
    if (found) {
      _termIds = termIds.filter((priceId) => priceId !== id);
    } else {
      if (id === 1) onCreateConfirm();
      _termIds = [...termIds];
      _termIds.push(id);
    }
    setTermIds(_termIds);
  };

  return (
    <>
      <SignUpFormContainer>
        <InputBoxWithIcon
          type={'text'}
          name={'email'}
          placeholder={'Email'}
          value={email}
          icon={<UserAvatraIcon color={'#38c948'} />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBoxWithIcon
          type={'text'}
          name={'username'}
          placeholder={'Username'}
          value={username}
          icon={<EmailIcon color={'#38c948'} />}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBoxWithIcon
          type={'password'}
          name={'password'}
          value={password}
          placeholder={'Password'}
          icon={<PasswordIcon color={'#38c948'} />}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signup-checkbox-list">
          {defaultTermsList.map((term) => (
            <CheckBox
              key={term.id}
              id={term.id}
              label={term.name}
              isChecked={termIds.includes(term.id)}
              onChange={(val) => handleChangeTermIds(val)}
            />
          ))}
        </div>
        <GradientButton label={'Submit'} handleClick={onSignUp} />
        <div className="sign-in-mode">{t("Already have an account?")}</div>
        <GradientButton
          label={'Sign in'}
          isNaked
          handleClick={props.goToSignIn}
        />
      </SignUpFormContainer>
    </>
  );
};
