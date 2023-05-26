import React, { useState } from "react";
import { CreateNew } from './CreateNew'
import { ImoprtNFT } from './ImportNFT'
import { CreateItemForm } from './CreateItemForm'
import {
  UploadNFTContainer,
  LeftContainer,
  Tabs,
  Tab
} from "./styles";
import { useTranslation } from "react-i18next";

export const UploadNFT = () => {
  const [showOption, setShowOption] = useState('create')
  const [newFileUpload, setNewFileUpload] = useState({});
  const{t}=useTranslation()
  return (
    <UploadNFTContainer>
      <LeftContainer>
        <Tabs>
          <Tab
            active={showOption === 'create'}
            onClick={() => setShowOption('create')}
          >
            {t("Create new")}
          </Tab>
      <Tab
            active={showOption === 'import'}
            onClick={() => setShowOption('import')}
          >
            Import NFT
          </Tab> 
        </Tabs>
        {showOption === 'create' && (
          <CreateNew setImageInfo={setNewFileUpload}/>
        )}
        {showOption === 'import' && (
          <ImoprtNFT />
        )}
      </LeftContainer>

      <CreateItemForm imageInfo={newFileUpload}/>
    </UploadNFTContainer>
  );
};
