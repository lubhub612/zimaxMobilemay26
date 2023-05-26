import React, { useState } from 'react';
import { StatsTabItemContainer, StatsHeader, StatsFilter, StatsBody } from './styles';
import BsGraphUp from '@meronex/icons/bs/BsGraphUp';
import { MainDropDown } from '../MainDropDown';
import NFTItemStatsChart from '../NFTItemStatsChart';
import { useTranslation } from 'react-i18next';

const StatsTabItem = () => {

  const statsList = [
    {id: 0, name: 'One hour', value: '3600'},
    {id: 1, name: '12 hours', value: '43200'},
    {id: 2, name: 'One day', value: '86400'},
    {id: 3, name: 'Last week', value: '604800'},
    {id: 4, name: 'Last 2 weeks', value: '1209600'},
    {id: 5, name: 'Last month', value: '2592000'},
    {id: 6, name: 'Last 2 months', value: '5184000'},
    {id: 7, name: 'Last 6 months', value: '15552000'},
    {id: 8, name: 'Last year', value: '31104000'},
    {id: 9, name: 'All Time', value: '0'}
  ]
  const {t}=useTranslation()
  const [selectedPeriod, setSelectedPeriod] = useState('0');

  return (
    <StatsTabItemContainer>
      <StatsHeader>
        <BsGraphUp />
        <div className="header-text">{t("Price History")}</div>
      </StatsHeader>
      <StatsFilter>
        <MainDropDown 
          dataList={statsList} 
          initialValue='0' 
          selectedPeriod={selectedPeriod} 
          setSelectedPeriod={setSelectedPeriod}
        />
      </StatsFilter>
      <StatsBody>
        <NFTItemStatsChart period={parseInt(selectedPeriod)}/>
      </StatsBody>
    </StatsTabItemContainer>
  )
}

export default StatsTabItem;
