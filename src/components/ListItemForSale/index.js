import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router"
import GradientButton from '../Shared/GradientButton'
import SellNowCardItem from './SellNowCardItem'
import { FixedPrice } from './FixedPrice'
import { TimeAuction } from './TimeAuction'

import {
  SaleNowIcon
} from "../Shared/SvgIcons"

import {
  ListItemForSaleContainer,
  SaleContainer,
  PreviewImageContainer,
  SellNowDetailContainer,
  SaleHeader
} from './styles'
import { useNFTItem } from '../../contexts/NFTContext'
import { useContract } from '../../contexts/ContractContext'
import { useTranslation } from 'react-i18next'

export const ListItemForSale = (props) => {
  const { itemLoaded } = useNFTItem();
  const { t } = useTranslation();
  const [product, setProduct] = useState({});
  const [saleMode, setSaleMode] = useState('fixed_price')
  const [defFeeValue, setDefFeeValue] = useState({});
  const { getDefaultFee } = useContract();

  useEffect(() => {
    let ac = new AbortController();

    getDefaultFee()
      .then(res => {
        if (ac.signal.aborted != true) {
          setDefFeeValue(res);
        }
      })
      .catch(err => {
        console.log(err.message);
      })
    return () => ac.abort();
  }, [getDefaultFee])

  useEffect(() => {
    setProduct(t => itemLoaded);
  }, [itemLoaded])

  return (
    <ListItemForSaleContainer>
      <SaleContainer>
        <SaleHeader>
          <SaleNowIcon />
          <span>{t("List item for sale")}</span>
        </SaleHeader>
        <SellNowDetailContainer>
          <div className='button-group'>
            <GradientButton
              isDarkMode
              isNoPadding
              label='Fixed Price'
              width='160px'
              height='56px'
              className={saleMode === 'fixed_price' ? 'active' : ''}
              handleClick={() => setSaleMode('fixed_price')}
            />
            <GradientButton
              isDarkMode
              isNoPadding
              label='Time Auction'
              width='160px'
              height='56px'
              className={saleMode === 'time_auction' ? 'active' : ''}
              handleClick={() => setSaleMode('time_auction')}
            />
            <GradientButton
              isDarkMode
              isNoPadding
              label='Mystery Box'
              width='160px'
              height='56px'
              className={''}
              handleClick={() => {}}
            />
          </div>
          {saleMode === 'fixed_price' && (
            <FixedPrice item={product} defFee={defFeeValue} />
          )}
          {saleMode === 'time_auction' && (
            <TimeAuction item={product} defFee={defFeeValue} />
          )}
        </SellNowDetailContainer>
      </SaleContainer>
      <PreviewImageContainer>
        <SellNowCardItem item={product} />
      </PreviewImageContainer>
    </ListItemForSaleContainer>
  )
}
