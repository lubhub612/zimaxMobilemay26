import React, { useState, useEffect } from 'react';
import { StatsChartContainer } from './styles';
import Chart from 'react-apexcharts';
import { useGlobal } from '../../../contexts/GlobalContext';
import { useCustomWallet } from '../../../contexts/WalletContext';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProfileStatsChart = (props) => {
  const { period, setHistory } = props;
  const { address } = useParams();

  const { invokeServer } = useGlobal();
  const { wallet } = useCustomWallet();
  const {t}=useTranslation()
  const [prices, setPrices] = useState([]);
  const [opt, setOptions] = useState(null);
  const [isEnableChart, setEnableChart] = useState(false);

  useEffect(() => {
    let ac = new AbortController();
    let addressToShow = address;
    if (addressToShow === 'me') {
      addressToShow = wallet.address;
    }

    if (addressToShow !== '') {
      invokeServer('get', `/api/trade?user=${addressToShow}&period=${period}`)
        .then((r) => {
          if (ac.signal.aborted === false) {
            if (r.data.result === 1) {
              setHistory((t) => r.data.history);
              let tt = r.data.history.map((t) => {
                return [
                  new Date(t.when).getTime(),
                  (t.priceUSD * t.copy).toFixed(2),
                ];
              });
              setPrices((t) => [{ data: tt }]);

              setOptions((t) => {
                return {
                  chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 200,
                    foreColor: '#C4C4C4',
                    toolbar: {
                      show: false,
                    },
                    zoom: {
                      autoScaleYaxis: true,
                    },
                  },
                  grid: {
                    borderColor: '#4C4E55',
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  markers: {
                    size: 0,
                    style: 'hollow',
                  },
                  xaxis: {
                    type: 'datetime',
                    min: r.data.min,
                    tickAmount: 6,
                    tooltip: {
                      enabled: false,
                    },
                    axisBorder: {
                      show: true,
                      color: '#4C4E55',
                      offsetX: 0,
                      offsetY: 1,
                    },
                  },
                  yaxis: {
                    show: true,
                    showAlways: true,
                    axisBorder: {
                      show: true,
                      color: '#4C4E55',
                      offsetX: -5,
                      offsetY: 0,
                    },
                  },
                  fill: {
                    type: 'gradient',
                    gradient: {
                      shade: 'light',
                      type: 'horizontal',
                      shadeIntensity: 0.5,
                      gradientToColors: [],
                      inverseColors: false,
                      opacityFrom: 1,
                      opacityTo: 0.5,
                      stops: [0, 100],
                      colorStops: [
                        {
                          offset: 0,
                          color: '#38c948',
                          opacity: 0.4,
                        },
                        {
                          offset: 100,
                          color: '#38c948',
                          opacity: 0,
                        },
                      ],
                    },
                  },
                  colors: ['#38c948', '#38c948'],
                  tooltip: {
                    enabled: true,
                    style: {
                      fontSize: '12px',
                      fontFamily: undefined,
                      color: 'red',
                    },
                  },
                };
              });
            }
          }
        })
        .catch((err) => {
          console.log(`${err.message}`);
        });
    }

    return () => ac.abort();
  }, [wallet.address, address, period]);

  useEffect(() => {
    setTimeout(() => {
      opt && setEnableChart(true);
    }, 1000);
  }, [opt]);

  return (
    <StatsChartContainer>
      {isEnableChart === true ? (
        <Chart options={opt} series={prices} type="area" height={200} />
      ) : (
        <div className="loading">{t("Loading...")}</div>
      )}
    </StatsChartContainer>
  );
};

export default ProfileStatsChart;
