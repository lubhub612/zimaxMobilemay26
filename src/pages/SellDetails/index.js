import React from 'react'
import { useParams } from 'react-router-dom'
import { SellDetails as SellController } from '../../components/SellDetails'
import { NFTProvider } from '../../contexts/NFTContext';

export const SellDetails = (props) => {
  const { collection, tokenId } = useParams();
  return (
    <NFTProvider contract={collection} tokenId={tokenId}>
      <SellController {...props} />
    </NFTProvider>
  )
}
