import React, { useEffect, useState } from 'react'
import { Collection } from './Collection'
import GradientButton from '../Shared/GradientButton'
import { CreateNewIcon } from '../Shared/SvgIcons'
import { Input, TextArea } from '../Shared/InputBox'
import { UploadFile } from './UploadFile'
import data from '../../data.json'

import {
  CollectionCreatorContainer,
  CollectionHeroContainer,
  CreateFormContainer,
  CreateFormHeader,
  CustomLabel,
  CreateFormDetails,
  CustomDescription,
  BannerImageContainer,
  BannerImageWrapper,
  LogoImageContainer,
  LogoImageWrapper
} from './styles'
import { useGlobal } from '../../contexts/GlobalContext'
import useToast from '../../hooks/useToast'
import { useContract } from '../../contexts/ContractContext'
import { useAuth } from '../../contexts/AuthContext'
import { useCustomWallet } from '../../contexts/WalletContext'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const CollectionCreator = () => {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const [collection, setCollection] = useState({});
  const { t } = useTranslation();
  const [photo, setPhoto] = useState(null)
  const [logo, setLogo] = useState(null)
  const [name, setName] = useState('')
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [description, setDescription] = useState('')

  const { invokeServer, addFileToIPFS, getIPFSUrl } = useGlobal();
  const { toastError, toastSuccess, showLoading, hideLoading } = useToast();
  const { createNewCollection } = useContract()
  const { wallet } = useCustomWallet();

  const onCreateNewCollection = async () => {

    if (auth.isLoggedIn !== true) {
      toastError("Fail", "Please sign in as a creator");
      return;
    }

    let photoHash = '', logoHash = '';

    if (logo != null) {
      await showLoading('Adding logo image to ipfs...');
      try {
        const hash = await addFileToIPFS(logo.file);
        await toastSuccess('logo hash', getIPFSUrl(hash.path));
        logoHash = hash.path;
      } catch (err) {
        await toastError('Error adding to IPFS', err.toString());
        await hideLoading();
        return;
      }
    }

    if (photo != null) {
      await showLoading('Adding banner image to ipfs...');
      try {
        const hash = await addFileToIPFS(photo.file);
        await toastSuccess('banner hash', getIPFSUrl(hash.path));
        photoHash = hash.path;
      } catch (err) {
        await toastError('Error adding to IPFS', err.toString());
        await hideLoading();
        return;
      }
    }

    await showLoading('creating on blockchain...');
    let ret = await createNewCollection({ banner: photoHash, logo: logoHash, name: name, description: description });

    if (ret !== undefined) {
      let newContractAddress = ret.events.CreatedERC1155TradableContract.returnValues.newContract;
      invokeServer('post', '/api/collection/new', {
        name: name,
        description: description,
        bannerURI: getIPFSUrl(photoHash),
        logoURI: getIPFSUrl(logoHash),
        contractAddress: newContractAddress,
        user: auth.loggedUserName,
        walletAddress: wallet.address,
      })
        .then(r => {
          if (r.data.result == 1) {
            toastSuccess('Success', 'server: ' + r.data.msg);
            navigate("/my-collections");
          } else {
            toastError('Fail', 'server: ' + r.data.msg);
          }
        }).catch(err => {
          toastError('Fail', err.toString());
        })
    }

    await hideLoading();
  }

  useEffect(() => {
    const rval = getRandomInt(data.collections.length);
    setCollection(t => { return data.collections[rval] });
  }, [])

  return (
    <CollectionCreatorContainer>
      <CreateFormContainer>
        <CreateFormHeader>
          <CreateNewIcon />
          <span>{t("Create a Collection")}</span>
        </CreateFormHeader>
        <CreateFormDetails>
          <CustomLabel><span>{t("*")}</span>{t("Logo Image")}</CustomLabel>
          <CustomDescription>{t("350 x 350 recommended")}</CustomDescription>
          <LogoImageContainer>
            <LogoImageWrapper>
              <UploadFile setPhoto={setLogo} />
            </LogoImageWrapper>
          </LogoImageContainer>

          <BannerImageContainer>
            <CustomLabel><span>{t("*")}</span>{t("Banner image")}</CustomLabel>
            <CustomDescription>{t("1400 x 400 recommended")} </CustomDescription>
            <BannerImageWrapper>
              <UploadFile setPhoto={setPhoto} />
            </BannerImageWrapper>
          </BannerImageContainer>

          <CustomLabel><span>{t("*")}</span>{t("Name")}</CustomLabel>
          <Input
            placeholder='Enter name for your collection'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <CustomLabel>{t("Description")}</CustomLabel>
          <TextArea
            placeholder='Enter name for your collection'
            rows='5'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <GradientButton
            label='Create'
            handleClick={onCreateNewCollection}
          />
        </CreateFormDetails>
      </CreateFormContainer>

      <CollectionHeroContainer>
        <h2>{t("Preview")}</h2>
        <Collection
          collection={collection}
          photo={photo?.url}
          logo={logo?.url}
          name={name}
          description={description}
        />
      </CollectionHeroContainer>
    </CollectionCreatorContainer>
  )
}