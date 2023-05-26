import styled from 'styled-components'

export const UploadFileContatiner = styled.div`
max-width: 450px;
margin: 30px auto;

.upload-file {
  .loader {
    padding: 100px 0;
  }

  .upload-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }

  .upload-desc {
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #C4C4C4;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .upload-preview {
    display: flex;
    justify-content: center;
    align-items: center;

    >img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .preview-action {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    >div {
      width: 50%;
    }
  }

  .uploading-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    margin: 0;
    color: #FFFFFF;
  }

  .uploading-filename {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    margin-top: 5px;
    color: #C4C4C4;
  }
}

.upload-setting {
  padding: 15px;
  margin-top: 29px;

  .upload-list-option {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .desc-1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 31px;
      color: #FFFFFF;
    }

    .desc-2 {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #C4C4C4;
      margin-top: 10px;
    }
  }

  .upload-copy-number {
    margin-top: 29px;

    .copy-text {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      margin-bottom: 10px;
    }
  }
}
`
export const LoadingContainer = styled.div`
  margin: auto;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .circle-loader {
    margin-top: 0;
    margin-left: 0;
  }
`
export const UploadingText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: white;
    font-size: 13px;
    font-weight: 600;
    margin-top: 4px;
  }
  svg {
    {
      path {
        fill: #FFFFFF;
      }
    }
  }
`
