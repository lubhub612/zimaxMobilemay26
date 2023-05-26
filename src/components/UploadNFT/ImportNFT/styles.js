import styled from 'styled-components';

export const ImoprtNFTContainer = styled.div`
  max-width: 450px;
  margin: 30px auto;
  border: 1px solid #38c948;
  border-radius: 15px;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: white;
    margin-top: 0;
    margin-bottom: 24px;
  }

  > p {
    color: #c4c4c4;
    font-size: 16px;
    line-height: 21px;
    margin-top: 0;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    padding: 30px 32px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    color: white;
  }
`;
