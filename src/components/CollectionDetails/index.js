import React, { useEffect, useState } from 'react';
import { Collection } from './Collection';
import GradientButton from '../Shared/GradientButton';
import { CreateNewIcon } from '../Shared/SvgIcons';
import { Input, TextArea } from '../Shared/InputBox';
import data from '../../data.json';
import { UploadFile } from './UploadFile';

import {
  CollectionsContainer,
  CollectionHeroContainer,
  CreateFormContainer,
  CreateFormHeader,
  CustomLabel,
  CreateFormDetails,
  CustomDescription,
  BannerImageContainer,
  BannerImageWrapper,
  LogoImageContainer,
  LogoImageWrapper,
} from './styles';
import { useGlobal } from '../../contexts/GlobalContext';
import useToast from '../../hooks/useToast';
import { useTranslation } from 'react-i18next';

export const CollectionDetails = (props) => {
  const { contractAddress } = props;

  const [isCreateMode, setIsCreateMode] = useState(false);

  const { invokeServer } = useGlobal();
  const { toastInfo, toastError } = useToast();

  const [collection, setCollection] = useState({
    id: 1,
    title: 'On1 Force',
    description:
      '0N1 Force are 7,777 unique collectibles Hand Illustrated by @TRUEIMCMPLX #NFTs',
    artist: 'a dummy description about this page',
    priceLabel: 'test, dummy, data',
    priceValue: '500',
    photo: '/images/on1force.png',
    logo: '/images/on1force-logo.png',
    site: 'www.on1force.com',
  });
  const [photo, setPhoto] = useState(null);
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    invokeServer(
      'get',
      `/api/collection?owner=&extra=one&address=${contractAddress}`
    )
      .then((res) => {
        if (res.data.result == 0) {
          toastInfo('Warning', res.data.msg);
        } else if (res.data.result == 1) {
          let t = res.data.collections[0];
          setCollection((prev) => {
            return {
              id: t._id,
              title: t.name == '' ? 'Anonymous' : t.name,
              description:
                t.description == '' ? 'No description' : t.description,
              artist: t.user,
              priceLabel: 'test, dummy, data',
              priceValue: '500',
              photo: t.bannerURI == '' ? '/images/on1force.png' : t.bannerURI,
              logo: t.logoURI == '' ? '/images/on1force-logo.png' : t.logoURI,
              site: 'www.on1force.com',
              contractAddress: t.contractAddress,
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toastError('Fail', err.message);
      });
  }, []);

  return (
    <CollectionsContainer isCreateMode={isCreateMode}>
      {isCreateMode && (
        <CreateFormContainer>
          <CreateFormHeader>
            <CreateNewIcon />
            <span>{t("Create a Collection")}</span>
          </CreateFormHeader>
          <CreateFormDetails>
            <CustomLabel>
              <span>{t("*")}</span>{t("Logo Image")}
            </CustomLabel>
            <CustomDescription>{t("350 x 350 recommended")}</CustomDescription>
            <LogoImageContainer>
              <LogoImageWrapper>
                <UploadFile setPhoto={setLogo} />
              </LogoImageWrapper>
            </LogoImageContainer>

            <BannerImageContainer>
              <CustomLabel>
                <span>{t("*")}</span>{t("Banner image")}
              </CustomLabel>
              <CustomDescription>{t("1400 x 400 recommended")} </CustomDescription>
              <BannerImageWrapper>
                <UploadFile setPhoto={setPhoto} />
              </BannerImageWrapper>
            </BannerImageContainer>

            <CustomLabel>
              <span>{t("*")}</span>{t("Name")}
            </CustomLabel>
            <Input
              placeholder="Enter name for your collection"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <CustomLabel>{t("Description")}</CustomLabel>
            <TextArea
              placeholder="Enter name for your collection"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <GradientButton label="Create" />
          </CreateFormDetails>
        </CreateFormContainer>
      )}
      <CollectionHeroContainer isCreateMode={isCreateMode}>
        {!isCreateMode ? (
          <>
            <h1>{t("My Collections")}</h1>
            {/* <GradientButton
              isNoPadding
              width='178px'
              height='48px'
              label='Create a Collection'
              className='create-btn'
              handleClick={() => setIsCreateMode(true)}
            /> */}
          </>
        ) : (
          <h2>{t("Preview")}</h2>
        )}
        <Collection
          collection={collection}
          photo={photo}
          logo={logo}
          name={name}
          description={description}
        />
      </CollectionHeroContainer>
    </CollectionsContainer>
  );
};
