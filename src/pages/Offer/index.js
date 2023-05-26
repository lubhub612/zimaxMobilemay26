import React from 'react';
import { useParams } from 'react-router-dom';
import { Offer as OfferController } from '../../components/Offer';
import { OfferProvider } from '../../contexts/OfferContext';

export const Offer = (props) => {
  const { collection, tokenId } = useParams();
  return (
    <OfferProvider contract={collection} tokenId={tokenId}>
      <OfferController {...props} />
    </OfferProvider>
  );
};
