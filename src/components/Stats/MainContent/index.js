import React, { useState } from 'react';
import { MainContentContainer } from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize';
import StatsEventTable from '../../Shared/StatsEventTable';

export const MainContent = (props) => {

  const {
    isOpenRightMenu,
    tradeHistory,
    nftFiltered,
    users,
  } = props

  const windowSize = useWindowSize();

  // const defaultEventList = [
  //   {id: 1, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 2, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 3, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 4, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 5, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 6, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  //   {id: 7, event: 'Sale', item: 'NFT Name', price: '0.33', quantity: '10', from: 'ZMX', to: '2899FaA..', time: '1 hour ago'},
  // ]

  // const [eventList, setEventList] = useState(defaultEventList)

  return (
    <MainContentContainer style={(windowSize.width < 800 && isOpenRightMenu) ? {display: 'none'} : {display: 'block'}}>
      <StatsEventTable eventList={tradeHistory} nftFiltered={nftFiltered} users={users}/>
    </MainContentContainer>
  )
}
