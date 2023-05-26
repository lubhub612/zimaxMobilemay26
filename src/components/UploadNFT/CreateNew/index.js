import React, { useRef, useState } from 'react'
import FileUploader from "../../Shared/FileUploader";
import NftLoader, { LoaderSize } from "../../Shared/NftLoader";
import GradientButton from "../../Shared/GradientButton";
import videoOverlay from '../../../assets/images/video-overlay.svg'

import {
  UploadFileContatiner
} from './styles'
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

export const CreateNew = (props) => {
  const { setImageInfo } = props

  const [uploadFile, setUploadFile] = useState(null)
  const [loadedImage, setLoadedImage] = useState(true)
  const [uploadFileName, setUploadFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const theme = useTheme();

  const videoRef = useRef();

  const handleFile = (uploaded) => {
    // submit a uploaded file.
    setUploadFileName(uploaded.name);
    let objectUrl = URL.createObjectURL(uploaded);
    setIsLoading(true)

    const fileExtension = uploaded.name.split('.').pop();
    const isImage = theme.imageTypeList.includes(fileExtension.toLowerCase());
    setLoadedImage(isImage);

    setTimeout(function(){
      setImageInfo && setImageInfo({ file: uploaded, url: objectUrl, isImage: isImage })
      setUploadFile(objectUrl);
      setIsLoading(false);
    }, 1000);
  }

  const clearUploadFile = () => {
    setImageInfo && setImageInfo({})
    setUploadFile(null);
  }
  const{t}=useTranslation()
  const handlePlay = () => {
    videoRef.current.play();
  }

  const handlePause = () => {
    videoRef.current.pause();
  }

  return (
    <UploadFileContatiner>
      <div className="upload-file">
        {isLoading ? (
          <>
            <div className='loader'>
              <NftLoader size={LoaderSize.sm} />
            </div>
            <p className="uploading-title">{t("Upload File")}</p>
            <p className="uploading-filename">{t("Uploading")} {uploadFileName}</p>
          </>
        ) : (
          uploadFile ? (
            <>
              <div className="upload-preview">
                {loadedImage? (
                  <img src={uploadFile} alt='upload-preview' />
                ) : (
                  <>
                      <video className="upload-video"
                        ref={videoRef}
                        src={uploadFile}
                        muted
                      >
                        {t("Your browser does not support playing videos.")}
                      </video>
                      <div
                        className="upload-video-overlay"
                        onMouseOver={handlePlay}
                        onMouseOut={handlePause}
                      >
                        <img src={videoOverlay} alt="play" width="24" />
                      </div>
                    </>
                )}
                
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