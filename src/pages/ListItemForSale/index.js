import React from 'react'
import { useParams } from 'react-router-dom'
import { ListItemForSale as ListForSaleController } from '../../components/ListItemForSale'
import { NFTProvider } from '../../contexts/NFTContext';

export const ListItemForSale = (props) => {
  const { collection, tokenId } = useParams();
  return (
    <NFTProvider contract={collection} tokenId={tokenId}>
      <ListForSaleController {...props} />
    </NFTProvider>
  )
}
