import styled, { css } from 'styled-components';

export const CollectionCreatorContainer = styled.div`
  display: flex;
  padding: 30px 15px;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    height: calc(100vh - 64px);
    overflow: auto;
  }
`;
export const CollectionHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin-top: 0;
    margin-bottom: 15px;
  }
  h2 {
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 16px;
    width: 100%;
    max-width: 445px;
    padding-left: 25px;
  }
  .create-btn {
    justify-content: flex-start;
    margin-bottom: 50px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 42px;
      margin-bottom: 22px;
    }
    .create-btn {
      margin-bottom: 70px;
    }
  }
  @media (min-width: 992px) {
    width: 50%;
    h1 {
      font-size: 48px;
    }
    margin-top: 0px;
  }
`;
export const CreateFormContainer = styled.div`
  background: #222430;
  border-radius: 10px;
  @media (min-width: 992px) {
    width: 50%;
  }
`;
export const CreateFormHeader = styled.div`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 19px 31px;
  display: flex;
  align-items: center;

  span {
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin-left: 22px;
    line-height: 28px;
  }
`;
export const CustomLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;
  color: white;
  span {
    color: #f55555;
  }
`;
export const CreateFormDetails = styled.div`
  padding: 21px;
  > input,
  > textarea {
    margin-bottom: 16px;
    width: 100%;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    padding: 21px 46px;
  }

  @media (min-width: 992px) {
    height: calc(100% - 66px);
    overflow: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #38c948;
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #38c948;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #38c948;
    }
  }
`;
export const CustomDescription = styled.div`
  font-size: 14px;
  color: #c4c4c4;
  line-height: 18px;
  font-weight: 500;
  margin-left: 8px;
  margin-bottom: 16px;
`;
export const BannerImageContainer = styled.div`
  margin: 16px 0 36px 0;
`;
export const BannerImageWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  max-width: 507px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoImageContainer = styled.div`
  margin: 16px 0 36px 0;
`;
export const LogoImageWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  max-width: 507px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
