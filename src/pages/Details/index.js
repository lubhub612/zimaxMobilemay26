import React from 'react'
import { useParams } from 'react-router-dom'
import { Details as DetailsController } from '../../components/Details'
import { SaleProvider } from '../../contexts/SaleContext';

export const Details = (props) => {
  const { collection, tokenId, saleId } = useParams();
  return (
    <SaleProvider contract={collection} tokenId={tokenId} saleId={saleId} category={props.category}>
      <DetailsController {...props} />
    </SaleProvider>
  )
}
