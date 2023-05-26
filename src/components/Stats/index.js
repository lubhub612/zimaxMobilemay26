import React, { useState, useEffect } from 'react'
import { StatsContainer, SideBarMenuContainer } from './styles'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useGlobal } from '../../contexts/GlobalContext'
import { useContract } from '../../contexts/ContractContext'
import { useData } from '../../contexts/DataContext'
import useToast from '../../hooks/useToast'

export const Stats = () => {

  const { searchText } = useData();
  const { invokeServer } = useGlobal();
  const { convertPrice } = useContract();
  const windows = useWindowSize();
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(true)
  const [history, setHistory] = useState();
  const [nftLoaded, setNFTLoaded] = useState()
  const [nftFiltered, setNFTFiltered] = useState()
  const [historyFiltered, setHistoryFiltered] = useState();
  const [searching, setSearching] = useState([new AbortController()])
  const [categoryFilter, setCategoryFilter] = useState({})
  const [users, setUsers] = useState([]);

  const [filterParams, setFilterParams] = useState({
    mintID: {
      minSetting: 0,
      maxSetting: 1000
    },
    price: {
      minSetting: 0,
      maxSetting: 1000
    }
  });

  useEffect(() => {
    if (windows.width > 768) {
      setIsOpenSideMenu(true)
    } else {
      setIsOpenSideMenu(false)
    }
  }, [windows.width])

  useEffect(() => {
    let ac = new AbortController();

    invokeServer('get', `/api/trade?all=`)
      .then(r => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            setHistory(t => r.data.history);
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`)
      })

    invokeServer('get', `/api/user?all=`)
      .then(r => {
        if (ac.signal.aborted === false) {
          if (r.data.result === 1) {
            setUsers(t => r.data.users);
          }
        }
      })
      .catch(err => {
        console.log(`${err.message}`)
      })
    return () => ac.abort();
  }, [])

  useEffect(() => {
    let ac = new AbortController();

    invokeServer('get', `/api/nft`)
      .then(res => {
        if (ac.signal.aborted === false) {
          setNFTLoaded(res.data.nft)
        }
      })
      .catch(err => {
        console.log(err);
      })

    if (history?.length > 0) {
      let priceUSDList = history.map(t => {
        let priceUSD = t.priceUSD;
        return priceUSD;
      })

      let idList = history.map(t => t.tokenId);

      let maxPriceUSD = priceUSDList.reduce((a, b) => (a > b) ? a : b);
      let minPriceUSD = priceUSDList.reduce((a, b) => (a < b) ? a : b);

      let maxID = idList.reduce((a, b) => (a > b) ? a : b);
      let minID = idList.reduce((a, b) => (a < b) ? a : b);

      setFilterParams(t => {
        return {
          ...t,
          mintID: {
            ...t.mintID,
            minSetting: minID,
            maxSetting: maxID
          },
          price: {
            ...t.price,
            minSetting: minPriceUSD < 1? 0: minPriceUSD - 1,
            maxSetting: maxPriceUSD + 1,
            min: minPriceUSD,
            max: maxPriceUSD,
          }
        }
      })
    }

    return () => ac.abort();
  }, [history])

  useEffect(() => {

    let ac = new AbortController();

    const myPromise = new Promise((resolve, reject) => {
      let _res = []
      if (searchText.length > 0) {
        _res = nftLoaded?.filter(nft => {
          return nft.collectionAddress.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.tokenId.toString() === searchText ||
            nft.URI.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.totalSupply.toString() === searchText ||
            nft.creator.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.holderCount.toString() === searchText ||
            nft.image.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.title.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.category0?.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.category1?.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.category2?.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.category3?.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.category4?.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.description.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.attributes.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.tags.toLowerCase().includes(searchText.toLowerCase()) ||
            nft.favoriteCount.toString() === searchText ||
            nft.commentCount.toString() === searchText ||
            nft.priceUSD.toString().includes(searchText);
        })
      } else {
        _res = nftLoaded;
      }

      _res = _res?.filter(tt => {
        if (categoryFilter.category0 !== undefined) {
          if (categoryFilter.category0 !== tt.category0)
            return false;
        }

        if (categoryFilter.category1 !== undefined) {
          if (categoryFilter.category1 !== tt.category1)
            return false;
        }

        if (categoryFilter.category2 !== undefined) {
          if (categoryFilter.category2 !== tt.category2)
            return false;
        }

        if (categoryFilter.category3 !== undefined) {
          if (categoryFilter.category3 !== tt.category3)
            return false;
        }

        if (categoryFilter.category4 !== undefined) {
          if (categoryFilter.category4 !== tt.category4)
            return false;
        }
        return true;
      }
      );

      resolve(_res);
    })

    myPromise
      .then((res, rej) => {
        if (ac.signal.aborted === false) {
          setNFTFiltered(arr => res)
        }
      })

    return () => ac.abort();
  }, [nftLoaded, searchText, categoryFilter])

  useEffect(() => {
    let i;
    for (i = 0; i + 1 < searching.length; i++) {
      if (!searching[i].signal.aborted)
        searching[i].abort();
    }

    setSearching(t => [t[t.length - 1], new AbortController()]);

    let tradeFiltered = history?.filter(t => {
      let nftFound = nftFiltered?.find(nft => nft.collectionAddress.toLowerCase() === t.collectionAddress.toLowerCase() && nft.tokenId === t.tokenId)
      if (nftFound === undefined) return false;

      if (filterParams.currency?.length > 0) {
        if (filterParams.currency.filter(a => a.id === t.payment).length === 0) return false;
      }
      if (filterParams.mintID.min !== undefined) {
        if (t.tokenId < filterParams.mintID.min) return false;
      }
      if (filterParams.mintID.max !== undefined) {
        if (t.tokenId > filterParams.mintID.max) return false;
      }
      let tt = t.priceUSD;
      if (filterParams.price.min !== undefined) {
        if (tt < filterParams.price.min) return false;
      }
      if (filterParams.price.max !== undefined) {
        if (tt > filterParams.price.max) return false;
      }
      if (filterParams.rarity?.length > 0) {
        let i;
        for (i = 0; i < filterParams.rarity.length; i++) {
          if (filterParams.rarity[i].name === 'Common') {
            if (nftFound.totalSupply >= 500) break;
          } else if (filterParams.rarity[i].name === 'Uncommon') {
            if (nftFound.totalSupply >= 251 && nftFound.totalSupply < 500) break;
          } else if (filterParams.rarity[i].name === 'Rare') {
            if (nftFound.totalSupply >= 51 && nftFound.totalSupply < 251) break;
          } else if (filterParams.rarity[i].name === 'Ultra Rare') {
            if (nftFound.totalSupply >= 11 && nftFound.totalSupply < 51) break;
          } else if (filterParams.rarity[i].name === 'Legendary') {
            if (nftFound.totalSupply < 10) break;
          }
        }

        if (i >= filterParams.rarity.length) return false;
      }

      if (filterParams.status?.length > 0) {
        if (filterParams.status.find(ss => ss.key === t.method) === undefined) return false;
      }
      return true;
    })

    if (tradeFiltered?.length > 0) {
      let tradeFilteredWithoutSort = [...tradeFiltered];

      tradeFilteredWithoutSort.sort((first, second) => {
        if (filterParams.sort?.key === 'latest_list') {
          let st1 = (new Date(first.when)).getTime(), st2 = (new Date(second.when)).getTime();

          return st2 - st1;
        } else if (filterParams.sort?.key === 'latest_sold') {
          let st1 = (new Date(first.when)).getTime(), st2 = (new Date(second.when)).getTime();

          return st2 - st1;
        } else if (filterParams.sort?.key === 'most_viewed') {
          if (first.collectionAddress.toLowerCase() === second.collectionAddress.toLowerCase() && first.tokenId === second.tokenId) return 0;

          let nftFound1 = nftFiltered?.find(nft => nft.collectionAddress.toLowerCase() === first.collectionAddress.toLowerCase() && nft.tokenId === first.tokenId)
          let nftFound2 = nftFiltered?.find(nft => nft.collectionAddress.toLowerCase() === second.collectionAddress.toLowerCase() && nft.tokenId === second.tokenId)

          if (nftFound2.visited !== undefined && nftFound1.visited === undefined) return 1;
          if (nftFound2.visited === undefined && nftFound1.visited !== undefined) return -1;
          if (nftFound2.visited === undefined && nftFound1.visited === undefined) return 0;
          else {
            return nftFound2.visited - nftFound1.visited;
          }
        } else if (filterParams.sort?.key === 'most_favorite') {
          if (first.collectionAddress.toLowerCase() === second.collectionAddress.toLowerCase() && first.tokenId === second.tokenId) return 0;

          let nftFound1 = nftFiltered?.find(nft => nft.collectionAddress.toLowerCase() === first.collectionAddress.toLowerCase() && nft.tokenId === first.tokenId)
          let nftFound2 = nftFiltered?.find(nft => nft.collectionAddress.toLowerCase() === second.collectionAddress.toLowerCase() && nft.tokenId === second.tokenId)

          if (nftFound2.favoriteCount !== undefined && nftFound1.favoriteCount === undefined) return 1;
          if (nftFound2.favoriteCount === undefined && nftFound1.favoriteCount !== undefined) return -1;
          if (nftFound2.favoriteCount === undefined && nftFound1.favoriteCount === undefined) return 0;
          else {
            return nftFound2.favoriteCount - nftFound1.favoriteCount;
          }
        } else if (filterParams.sort?.key === 'oldest') {
          let st1 = (new Date(first.when)).getTime(), st2 = (new Date(second.when)).getTime();

          return st1 - st2;
        }
        return 0;
      });

      if (searching[searching.length - 1].signal.aborted === false) {
        setHistoryFiltered(ss => tradeFilteredWithoutSort);
      }
    } else {
      if (searching[searching.length - 1].signal.aborted === false) {
        setHistoryFiltered(ss => []);
      }
    }

    return () => searching.length > 0 ? searching[searching.length - 1].abort() : {};
  }, [nftFiltered, filterParams])

  const handleCategoryClicked = (depth0, depth1, depth2, depth3, depth4) => {

    if (
      (categoryFilter.category0 === depth0) &&
      (categoryFilter.category1 === depth1) &&
      (categoryFilter.category2 === depth2) &&
      (categoryFilter.category3 === depth3) &&
      (categoryFilter.category4 === depth4)
    ) {
      setCategoryFilter(t => { return {} });
    } else {
      setCategoryFilter(t => {
        let tt = {};
        if (depth0) tt.category0 = depth0;
        if (depth1) tt.category1 = depth1;
        if (depth2) tt.category2 = depth2;
        if (depth3) tt.category3 = depth3;
        if (depth4) tt.category4 = depth4;

        return tt;
      })
    }
  }

  return (
    <StatsContainer isOpenSideMenu={isOpenSideMenu}>
      <SideBarMenuContainer style={isOpenSideMenu ? { width: '340px' } : { width: '64px' }}>
        <SideBar
          isOpenSideMenu={isOpenSideMenu}
          setIsOpenSideMenu={setIsOpenSideMenu}
          closeSideMenu={() => setIsOpenSideMenu(false)}
          filterParams={filterParams}
          setFilterParams={setFilterParams}
          handleCategoryClicked={handleCategoryClicked}
        />
      </SideBarMenuContainer>
      <MainContent isOpenRightMenu={isOpenSideMenu} tradeHistory={historyFiltered} nftFiltered={nftFiltered} users={users}/>
    </StatsContainer>
  )
}
