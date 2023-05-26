import React, { useState } from 'react'
import FileUploader from "../../Shared/FileUploader";
import NftLoader, { LoaderSize } from "../../Shared/NftLoader";
import GradientButton from "../../Shared/GradientButton";
import { ProgressUploadSharpIcon } from '../../Shared/SvgIcons'

import {
  UploadFileContatiner,
  LoadingContainer,
  UploadingText
} from './styles'
import { useTranslation } from 'react-i18next';

export const UploadFile = (props) => {
  const { setPhoto } = props
  const [uploadFile, setUploadFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleFile = (uploaded) => {
    // submit a uploaded file.
    let objectUrl = URL.createObjectURL(uploaded);
    setIsLoading(true)

    setTimeout(function(){
      setUploadFile(objectUrl);
      setPhoto && setPhoto(objectUrl)
      setIsLoading(false)
    }, 1000);
  }

  const clearUploadFile = () => {
    setUploadFile(null);
    setPhoto && setPhoto(null)
  }
  const { t } = useTranslation();

  return (
    <UploadFileContatiner>
      <div className="upload-file">
        {isLoading ? (
          <LoadingContainer>
            <NftLoader size={LoaderSize.md} />
            <UploadingText>
              <ProgressUploadSharpIcon />
              <span>{t("Uploading...")}</span>
            </UploadingText>
          </LoadingContainer>
        ) : (
          uploadFile ? (
            <>
              <div className="upload-preview">
                <img src={uploadFile} alt='upload-preview' />
              </div>
              <div className="preview-action">
                <GradientButton
                  label={'Delete'}
                  width={'106px'}
                  height={'36px'}
                  handleClick={clearUploadFile}
                />
                <FileUploader 
                  label={'Change'} 
                  handleFile={handleFile} 
                />
              </div>
            </>
          ) : (
            <>
              <div className="upload-title">
                {t("Upload File")}
              </div>
              <div className="upload-desc">
                {t("Accepte file types (JPG, PNG, MOV, MP4, GIF) Max upload size 50MB")}
              </div>
              <FileUploader 
                label={'+Add File'} 
                handleFile={handleFile}
              />
            </>
          )
        )}
      </div>
    </UploadFileContatiner>
  )
}