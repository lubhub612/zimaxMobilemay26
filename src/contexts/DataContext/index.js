import { createContext, useContext, useState, useEffect, useCallback } from "react";
import dummyData from '../../data.json'
import { useContract } from "../ContractContext";
import { useGlobal } from "../GlobalContext";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const { invokeServer } = useGlobal();

  const [searchText, setSearchText] = useState('');

  const handleSearchNFTs = useCallback((text) => {
    setSearchText(t => text);
  }, [])

  const increaseVisitCount = (collectionAddress, tokenId) => {
    invokeServer('post', '/api/nft/visit', {
      collectionAddress: collectionAddress.toLowerCase(),
      tokenId: tokenId
    })
      .then(r => {
        if (r.data.result === 1) {
        }
      })
      .catch(err => {
        console.log(`${err.message}`);
      })
  }

  return (
    <DataContext.Provider value={{
      handleSearchNFTs,
      searchText,
      increaseVisitCount,
    }}>
      {children}
    </DataContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
export const useData = () => {
  const dataManager = useContext(DataContext)
  return dataManager || [{}, async () => { }]
}
