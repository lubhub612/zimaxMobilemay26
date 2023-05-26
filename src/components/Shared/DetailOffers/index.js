import React, { useEffect, useState } from 'react';
import {
  OfferSectionContainer,
  OfferSectionBody,
  OfferTable,
  PriceWrapper
} from './styles';
import { useTheme } from 'styled-components';
import { EmptyActivityIcon } from '../SvgIcons';
import GradientButton from '../GradientButton';
import { useTranslation } from 'react-i18next';

const DetailOffers = (props) => {
const{t}=useTranslation()
  const { offers } = props;

  const theme = useTheme();

  const [offerList, setOfferList] = useState([]);

  // const offerList = [
  //   {id: 1, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 2, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 3, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 4, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 5, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 6, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  //   {id: 7, price: 1290, usd_price: '$1,300.00', expire_date: '7 Days', from: 'Manor_park_G' },
  // ]

  useEffect(() => {
    let nowTick = new Date().getTime();

    offers && setOfferList(oldlist => offers.map((t, id) => {
      let tLeft = ((new Date(t.start).getTime() + t.duration * 1000) - nowTick) / 1000;
      let days = parseInt(tLeft / (3600 * 24));
      let hours = parseInt((tLeft - days * 24 * 3600) / 3600);
      let minutes = parseInt((tLeft - days * 24 * 3600 - hours * 3600) / 60);
      let exp_date = (days > 0? `${days} days / `: '') + (hours > 0? `${hours} h / `: '') + (minutes > 0? `${minutes} m`: '');
      if (exp_date === '')
        exp_date = 'already expired';

      return {
        id: id,
        price: t.price,
        paymentName: t.paymentName,
        usd_price: t.priceUSD,
        expire_date: exp_date,
        from: t.name
      };
    }));
  }, [offers])

  const renderPriceField = (activity) => {
    switch (activity.from) {
      case 'ZMX':
        return (
          <div className="price-div">
            <img src={theme.images.chainTokenIcon} alt='ZMX' />
            <div>{activity.price}</div>
          </div>
        )
      case 'BNB':
        return (
          <div className="price-div">
            <img src={theme.images.binanceTokenIcon} alt='bnb' />
            <div>{activity.price}</div>
          </div>
        )
      case 'BUSD':
        return (
          <div className="price-div">
            <img src={theme.images.binanceUsdIcon} alt='busd' />
            <div>{activity.price}</div>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <OfferSectionContainer>
      <OfferSectionBody>
        <OfferTable>
          <table>
            <thead>
              <tr>
                <th>{t("Price")}</th>
                <th>{t("USD Price")}</th>
                <th>{t("Expiration Day")}</th>
                <th>{t("From")}</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            {offerList.length > 0 ? (
              offerList.map(offer => (
                <tbody key={offer.id}>
                  <tr>
                    <td>
                      <PriceWrapper>
                        <img src='/icons/price-icon.png' alt='' />
                        <span>{offer.price.toFixed(2)} {offer.paymentName}</span>
                      </PriceWrapper>
                    </td>
                    <td className='usd_price'>{offer.usd_price}</td>
                    <td>{offer.expire_date}</td>
                    <td className='from'>{offer.from}</td>
                    {/* <td className='action'>
                      <GradientButton
                        label='Accept'
                        isDarkMode
                        height='34px'
                        width='85px'
                      />
                    </td> */}
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td colSpan={8} style={{paddingTop: '100px'}}>
                    <div className="no-result">
                      <EmptyActivityIcon />
                      <div className="empty-text">{t("There Are No stats Yet")}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </OfferTable>
      </OfferSectionBody>
    </OfferSectionContainer>
  )
}

export default DetailOffers;
