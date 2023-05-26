import React from 'react';
import { NftLoaderContainer, Loader } from './styles';

export const LoaderSize = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
}

const NftLoader = (props) => {

  let size;
  switch (props.size) {
    case LoaderSize.xs:
      size = "40px";
      break;
    case LoaderSize.sm:
      size = "68px";
      break;
    case LoaderSize.md:
      size = "92px";
      break;
    case LoaderSize.lg:
      size = "120px";
      break;
    default:
      size = "68px";
      break;
  }

  return (
    <NftLoaderContainer>
      <Loader size={size} className='circle-loader'></Loader>
    </NftLoaderContainer>
  )
}

export default NftLoader;
