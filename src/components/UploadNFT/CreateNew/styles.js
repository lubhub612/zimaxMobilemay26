import styled from 'styled-components';

export const UploadFileContatiner = styled.div`
max-width: 450px;
margin: 30px auto;

.upload-file {
  border: 1px solid #38c948;
  border-radius: 15px;
  padding: 16px 20px;

  .loader {
    padding: 100px 0;
  }

  .upload-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }

  .upload-desc {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #C4C4C4;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .upload-preview {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    >img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    .upload-video {
      width: 100%;
      height: 230px;
      object-fit: scale-down;
    }

    .upload-video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        img {
          display: none;
        }
      }
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

@media (min-width: 768px) {
  .upload-file {
    padding: 16px 60px;
  }
`;
