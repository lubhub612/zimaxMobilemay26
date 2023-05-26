import React, { useEffect, useState } from 'react'
import { Input, TextArea } from '../../Shared/InputBox'
import GradientButton from '../../Shared/GradientButton'
import { Select } from '../../Shared/Select'
import AiOutlinePlus from '@meronex/icons/ai/AiOutlinePlus'
import ToggleButton from '../../Shared/ToggleButton'
import MainModal from '../../Shared/MainModal'
import MdClose from '@meronex/icons/ios/MdClose'
import { AddTagIcon } from '../../Shared/SvgIcons'
import { AddPropertyForm } from './AddPropertyForm'

import {
  CreateItemFormContainer,
  CreateItemFormDetails,
  ItemWrapper,
  Option,
  AddPropertiesContainer,
  ToggleContainer,
  PropertyListContainer,
  PropertyItem
} from './styles'
import { useGlobal } from '../../../contexts/GlobalContext'
import useToast from '../../../hooks/useToast'
import { useCustomWallet } from '../../../contexts/WalletContext'
import { useContract } from '../../../contexts/ContractContext'
import { useNavigate, useRoutes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const CreateItemForm = (props) => {
  const { imageInfo } = props;
  const navigate = useNavigate();
  const [properties, setProperties] = useState([
    // { id: 1, name: 'Rarity', type: 'Common' },
    // { id: 2, name: 'Rarity', type: 'Common' },
    // { id: 3, name: 'Rarity', type: 'Common' },
  ])
  const [propertyRenders, setPropertyRenders] = useState([]);

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [categoryOptionsLevel0, setCategoryOptionsLevel0] = useState([]);
  const [category0, setCategory0] = useState();
  const [categoryDef0, setCategoryDef0] = useState('');
  const [categoryOptionsLevel1, setCategoryOptionsLevel1] = useState([]);
  const [category1, setCategory1] = useState();
  const [categoryDef1, setCategoryDef1] = useState('');
  const [categoryOptionsLevel2, setCategoryOptionsLevel2] = useState([]);
  const [category2, setCategory2] = useState();
  const [categoryDef2, setCategoryDef2] = useState('');
  const [categoryOptionsLevel3, setCategoryOptionsLevel3] = useState([]);
  const [category3, setCategory3] = useState();
  const [categoryDef3, setCategoryDef3] = useState('');
  const [categoryOptionsLevel4, setCategoryOptionsLevel4] = useState([]);
  const [category4, setCategory4] = useState();
  const [categoryDef4, setCategoryDef4] = useState('');

  // const categoryOptions = [
  //   { value: 'cat_1', content: <Option>Games</Option> },
  //   { value: 'cat_2', content: <Option>Sports</Option> },
  //   { value: 'cat_3', content: <Option>ESports</Option> },
  //   { value: 'cat_4', content: <Option>Artist</Option> },
  //   { value: 'cat_5', content: <Option>Influencer</Option> },
  //   { value: 'cat_6', content: <Option>Custom Category</Option> }
  // ]

  const [openAddPropertyModal, setOpenAddPropertyModal] = useState(false)
  const {t}=useTranslation();
  const [title, setTitle] = useState('');
  const [collectionOptions, setCollectionOptions] = useState([]);
  const [targetCollection, setTargetCollection] = useState([]);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [supply, setSupply] = useState(0);
  const [isAssingMysteryBox, setIsAssingMysteryBox] = useState(false)

  const { invokeServer, addFileToIPFS, getIPFSUrl } = useGlobal();
  const { toastError, toastInfo, toastSuccess, showLoading, hideLoading } = useToast();
  const { wallet, getWalletAddressBySessionKey } = useCustomWallet();
  const { createNFT, getReservedTokenId } = useContract();

  const handleAddProperty = (newProperty) => {
    setProperties([
      ...properties,
      {
        id: properties.length > 0 ? properties[properties.length - 1].id + 1 : 1,
        ...newProperty
      }
    ])
  }
  const handleRemoveProperty = (propertyId) => {
    const _properties = properties.filter(tag => tag.id !== propertyId)
    setProperties(_properties)
  }

  const handleTagText = t => {
    let tt = t.split(/\s*(?:#|$)\s*/);
    let tx = tt.filter(t => t !== '');
    setTags(tx);
  }

  useEffect(() => {
    let ac = new AbortController();

    invokeServer('get', `/api/nft_category?address=${getWalletAddressBySessionKey()}`)
      .then(r => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            setCategoryOptions(t => {
              return r.data.categories;
            })
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`);
      })

    return () => ac.abort();
  }, [])

  useEffect(() => {
    if (categoryOptions.length > 0) {
      let cate0 = categoryOptions.map(t => t.depth0);
      let uniqCate0 = cate0.filter((item, pos) => cate0.indexOf(item) === pos && item !== '');
      let options0 = uniqCate0.map((t, i) => {
        return {
          value: t,
          content: <Option>{t}</Option>
        }
      })

      setCategoryOptionsLevel0(t => options0);
      if (options0.length > 0) {
        setCategoryDef0(options0[0].value);
        setCategory0(options0[0].value);
      } else {
        setCategory0('');
      }
    } else {
      setCategoryOptionsLevel0(t => []);
    }
    setCategory0('');
  }, [categoryOptions])

  useEffect(() => {
    let depth0Filter = categoryOptions.filter(t => t.depth0 === category0);
    if (depth0Filter.length > 0) {
      let cate1 = depth0Filter.map(t => t.depth1);
      let uniqCate1 = cate1.filter((item, pos) => cate1.indexOf(item) === pos && item !== '');
      let options1 = uniqCate1.map((t, i) => {
        return {
          value: t,
          content: <Option>{t}</Option>
        }
      })

      setCategoryOptionsLevel1(t => options1);
      if (options1.length > 0) {
        setCategoryDef1(options1[0].value);
        setCategory1(options1[0].value);
      } else {
        setCategory1('');
      }
    } else {
      setCategoryOptionsLevel1(t => []);
      setCategory1('');
    }
  }, [category0])

  useEffect(() => {
    let depth1Filter = categoryOptions.filter(t => t.depth0 === category0 && t.depth1 === category1);
    if (depth1Filter.length > 0) {
      let cate2 = depth1Filter.map(t => t.depth2);
      let uniqCate2 = cate2.filter((item, pos) => cate2.indexOf(item) === pos && item !== '');
      let options2 = uniqCate2.map((t, i) => {
        return {
          value: t,
          content: <Option>{t}</Option>
        }
      })

      setCategoryOptionsLevel2(t => options2);
      if (options2.length > 0) {
        setCategoryDef2(options2[0].value);
        setCategory2(options2[0].value);
      } else {
        setCategory2('');
      }
    } else {
      setCategoryOptionsLevel2(t => []);
      setCategory2('');
    }
  }, [category0, category1])

  useEffect(() => {
    let depth2Filter = categoryOptions.filter(t => t.depth0 === category0 && t.depth1 === category1 && t.depth2 === category2);
    if (depth2Filter.length > 0) {
      let cate3 = depth2Filter.map(t => t.depth3);
      let uniqCate3 = cate3.filter((item, pos) => cate3.indexOf(item) === pos && item !== '');
      let options3 = uniqCate3.map((t, i) => {
        return {
          value: t,
          content: <Option>{t}</Option>
        }
      })

      setCategoryOptionsLevel3(t => options3);
      if (options3.length > 0) {
        setCategoryDef3(options3[0].value);
        setCategory3(options3[0].value);
      } else {
        setCategory3('');
      }
    } else {
      setCategoryOptionsLevel3(t => []);
      setCategory3('');
    }
  }, [category0, category1, category2])

  useEffect(() => {
    let depth3Filter = categoryOptions.filter(t => t.depth0 === category0 && t.depth1 === category1 && t.depth2 === category2 && t.depth3 === category3);
    if (depth3Filter.length > 0) {
      let cate4 = depth3Filter.map(t => t.depth4);
      let uniqCate4 = cate4.filter((item, pos) => cate4.indexOf(item) === pos && item !== '');
      let options4 = uniqCate4.map((t, i) => {
        return {
          value: t,
          content: <Option>{t}</Option>
        }
      })

      setCategoryOptionsLevel4(t => options4);
      if (options4.length > 0) {
        setCategoryDef4(options4[0].value);
        setCategory4(options4[0].value);
      } else {
        setCategory4('');
      }
    } else {
      setCategoryOptionsLevel4(t => []);
      setCategory4('');
    }
  }, [category0, category1, category2, category3])

  useEffect(() => {
    let ac = new AbortController();
    if (wallet.address?.length > 0 && wallet.address !== '0x0') {
      invokeServer('get', `/api/collection?owner=${wallet.address}&extra=onlyOwner`)
        .then(res => {
          if (ac.signal.aborted === false) {
            if (res.data.result == 0) {
              toastInfo('Warning', res.data.msg);
            } else if (res.data.result == 1) {

              let colOpts = res.data.collections.map(t => {
                return { value: t.contractAddress, content: <Option>{t.name == '' ? t.contractAddress : `${t.name} - ${t.contractAddress}`}</Option> }
              });

              if (colOpts.length === 0) {
                toastInfo('Warning', 'No collection found. Linking to creating a collection...');
                setTimeout(() => {
                  if (ac.signal.aborted === false) {
                    navigate('/my-collections/create');
                  }
                }, 2000)
              }
              setCollectionOptions(co => colOpts);
            }
          }
        })
        .catch(err => {
          console.log(err);
          if (ac.signal.aborted === false) {
            toastError('Fail', err.message);
          }
        })
    }

    return () => ac.abort();
  }, [wallet.address])

  useEffect(() => {
    if (collectionOptions.length > 0) {
      setTargetCollection(collectionOptions[0].value);
    }
  }, [collectionOptions])

  useEffect(async () => {
    let ac = new AbortController();

    let i;
    let ptarray = [];
    for (i = 0; i < properties.length; i++) {
      let property = properties[i];
      let tx = await invokeServer('get', `/api/nft/property?type=${property?.type}&name=${property?.name}&creator=${wallet.address.toLowerCase()}`)
        .then(r => {
          if (r.data.result === 1) {
            return r.data.percentage;
          }
        })
        .catch(err => {
          console.log(`${err.message}`);
        })

      const makePercentageTags = (tval) => {
        if (tval === undefined) {
          return <></>;
        } else {
          return (
            <>
              <span className='property-name percentage'>{`Marketplace: ${tval.marketplace.toFixed(1)}%`}</span>
              <span className='property-name percentage'>{`Creator: ${tval.creator.toFixed(1)}%`}</span>
            </>
          )
        }
      }

      let ut = (
        <PropertyItem key={property.id}>
          <span className='property-type'>{property?.type}</span>
          <span className='property-name'>{property?.name}</span>
          {makePercentageTags(tx)}
          <MdClose
            onClick={() => handleRemoveProperty(property.id)}
          />
        </PropertyItem>
      )

      ptarray.push(ut);
    }

    setPropertyRenders(prs => ptarray);

    return () => ac.abort();
  }, [properties])

  const onCreate = async () => {
    if (imageInfo.file === undefined || title == '' || targetCollection == '' || supply <= 0)
      return;

    // console.log(imageInfo);
    // console.log(title);
    // console.log(targetCollection);
    // console.log(category);
    // console.log(description);
    // console.log(properties);
    // console.log(tags);
    // console.log(supply);
    // console.log(isAssingMysteryBox);

    await showLoading(`Adding NFT ${imageInfo.isImage ? 'image' : 'video'} to ipfs...`);

    // MP4 file uploaded to https://ipfs.infura.io/ipfs/QmY9wSYCqu5rSteB4yQqZEN9cVcsAiC5sVi7G4YAymSHNh

    let ipfsHash = '';
    try {
      const hash = await addFileToIPFS(imageInfo.file);
      ipfsHash = hash.path;
      await toastSuccess('NFT asset', getIPFSUrl(ipfsHash));
    } catch (err) {
      await toastError('Error adding to IPFS', err.toString());
      await hideLoading();
      return;
    }

    let tokenURI = '';

    await showLoading(`Building tokenURI...`);
    try {
      let tokenInfo = {
        name: title,
        description: description,
        image: getIPFSUrl(ipfsHash),
        video: imageInfo.isImage ? false : true,
        category0: category0 || '',
        category1: category1 || '',
        category2: category2 || '',
        category3: category3 || '',
        category4: category4 || '',
        attributes: properties,
        tags: tags,
      }

      const hash = await addFileToIPFS(JSON.stringify(tokenInfo));
      tokenURI = hash.path;
      await toastSuccess('NFT URI', getIPFSUrl(tokenURI));
    } catch (err) {
      await toastError('Error adding to IPFS', err.toString());
      await hideLoading();
      return;
    }

    await showLoading(`Creating an NFT...`);

    let tokenId = await getReservedTokenId({ contractAddress: targetCollection });

    if (tokenId === 0) {
      await hideLoading();
      toastError('Fail', 'Unable to read reserved token index from a collection contract');
      return;
    }

    let tx = await createNFT({
      contractAddress: targetCollection,
      supply: supply,
      uri: getIPFSUrl(tokenURI),
    });

    if (tx !== undefined) {
      invokeServer('put', '/api/nft/new', {
        collectionAddress: targetCollection,
        tokenId: tokenId,
        URI: getIPFSUrl(tokenURI),
        creator: wallet.address,
        holderCount: 1,
        totalSupply: supply,
        image: getIPFSUrl(ipfsHash),
        video: imageInfo.isImage ? false : true,
        title: title,
        category0: category0 || '',
        category1: category1 || '',
        category2: category2 || '',
        category3: category3 || '',
        category4: category4 || '',
        description: description,
        attributes: JSON.stringify(properties),
        tags: JSON.stringify(tags)
      })
    .then(r => {
          if (r.data.result == 1) {
            toastSuccess('Success', 'sync to server');
            navigate(`/products/${tokenURI}/1/offer`)
          } else {
            toastError('Fail', 'sync to server');
          }
        }).catch(err => {
          toastError('Fail', err.toString());
        })
    }

    await hideLoading();
  }

  return (
    <>
      <CreateItemFormContainer>
        <h1>{t("Create New Item")}</h1>
        <CreateItemFormDetails>
          <ItemWrapper>
            <label>{t("Title")}</label>
            <Input
              placeholder='Enter title about art..'
              onChange={e => setTitle(e.target.value)}
            />
          </ItemWrapper>
          <ItemWrapper>
            <label>{t("Add to a Collection")}</label>
            <Select
              notReload
              placeholder={<Option>{t("Select Collection")}</Option>}
              defaultValue={collectionOptions.length > 0 ? collectionOptions[0].value : ''}
              options={collectionOptions}
              onChange={val => setTargetCollection(t => val)}
            />
          </ItemWrapper>
          {
            categoryOptionsLevel0.length > 0 && <ItemWrapper>
              <label>{t("Select Top-Level Category")}</label>
              <Select
                notReload
                placeholder={<Option>{t("Select Top-Level Category")}</Option>}
                defaultValue={categoryDef0}
                options={categoryOptionsLevel0}
                onChange={val => {
                  setCategory0(t => val)
                }}
              />
            </ItemWrapper>
          }
          {
            categoryOptionsLevel1.length > 0 && <ItemWrapper>
              <label>{t("Select Depth-1 Category")}</label>
              <Select
                notReload
                placeholder={<Option>{t("Select Depth-1 Category")}</Option>}
                defaultValue={categoryDef1}
                options={categoryOptionsLevel1}
                onChange={val => {
                  setCategory1(t => val)
                }}
              />
            </ItemWrapper>
          }
          {
            categoryOptionsLevel2.length > 0 && <ItemWrapper>
              <label>{t("Select Depth-2 Category")}</label>
              <Select
                notReload
                placeholder={<Option>{t("Select Depth-2 Category")}</Option>}
                defaultValue={categoryDef2}
                options={categoryOptionsLevel2}
                onChange={val => {
                  setCategory2(t => val)
                }}
              />
            </ItemWrapper>
          }
          {
            categoryOptionsLevel3.length > 0 && <ItemWrapper>
              <label>{t("Select Depth-3 Category")}</label>
              <Select
                notReload
                placeholder={<Option>{t("Select Depth-3 Category")}</Option>}
                defaultValue={categoryDef3}
                options={categoryOptionsLevel3}
                onChange={val => {
                  setCategory3(t => val)
                }}
              />
            </ItemWrapper>
          }
          {
            categoryOptionsLevel4.length > 0 && <ItemWrapper>
              <label>{t("Select Depth-4 Category")}</label>
              <Select
                notReload
                placeholder={<Option>{t("Select Depth-4 Category")}</Option>}
                defaultValue={categoryDef4}
                options={categoryOptionsLevel4}
                onChange={val => {
                  setCategory4(t => val)
                }}
              />
            </ItemWrapper>
          }
          <ItemWrapper>
            <label>{t("Description")}</label>
            <TextArea
              rows={5}
              placeholder='Enter description about your NFT in no more than 100 Words '
              onChange={e => setDescription(e.target.value)}
            />
          </ItemWrapper>
          <AddPropertiesContainer>
            <span>{t("Add Properties")}</span>
            <AiOutlinePlus
              onClick={() => setOpenAddPropertyModal(true)}
            />
          </AddPropertiesContainer>
          <PropertyListContainer>
            {propertyRenders}
          </PropertyListContainer>
          <ItemWrapper>
            <label>{t("Add Tags")}</label>
            <Input
              placeholder='Add #Tags about your NFT..'
              onChange={e => handleTagText(e.target.value)}
            />
          </ItemWrapper>
          <ItemWrapper>
            <label>{t("Supply")}</label>
            <Input
              placeholder='The number of copíes that can be minted'
              value={supply}
              onChange={e => {
                let v = parseInt(e.target.value);
                if (isNaN(v) || v <= 0)
                  setSupply(t => 1);
                else
                  setSupply(t => v);
              }}
            />
          </ItemWrapper>
          <ToggleContainer>
            {/* <span>Assign to Mystery Box</span>
            <ToggleButton
              isChecked={isAssingMysteryBox}
              handleToggle={() => setIsAssingMysteryBox(!isAssingMysteryBox)}
            /> */}
          </ToggleContainer>
          <GradientButton
            width='171px'
            height='41px'
            label='Create Item'
            handleClick={onCreate}
          />
        </CreateItemFormDetails>
      </CreateItemFormContainer>

      {openAddPropertyModal && (
        <MainModal
          icon={<AddTagIcon />}
          title='Add Property'
          width='556px'
          height='448px'
          handleClose={() => setOpenAddPropertyModal(false)}
        >
          <AddPropertyForm
            handleClose={() => setOpenAddPropertyModal(false)}
            handleSave={handleAddProperty}
          />
        </MainModal>
      )}
    </>
  )
} 