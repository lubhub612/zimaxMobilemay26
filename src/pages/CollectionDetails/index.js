import React from 'react'
import { useParams } from "react-router";
import { CollectionDetails as CollectionDetailsController } from '../../components/CollectionDetails'

export const CollectionDetails = (props) => {
  const { contractAddress } = useParams()
  const collectionDetailsProps = {
    ...props,
    contractAddress
  }
  return (
    <CollectionDetailsController {...collectionDetailsProps} />
  )
}
