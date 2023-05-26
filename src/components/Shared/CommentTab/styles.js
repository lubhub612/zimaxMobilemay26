import styled from 'styled-components';

export const CommentTabContainer = styled.div`
  height: 100%;
  /* display: flex; */
`;

export const Tab = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ active }) => (active ? '#38c948' : '#FFFFFF')};
  cursor: pointer;
  border: 0;
  outline: 0;
  background: #222430;
  height: 26px;
  width: 100px;
`;

export const TabListWrapper = styled.div`
  overflow: auto;
  border-bottom: 1px solid #000;
`;

export const TabList = styled.div`
  display: flex;
  padding: 12px 25px;

  @media (min-width: 576px) {
    padding: 14px 42px;
  }
`;

export const TabContent = styled.div`
  min-height: 100px;
  background: #222430;
  overflow: auto;
  border-bottom: 1px solid #000;
`;

export const TabPanel = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
`;

export const CommentSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;

  > svg {
    width: 35px;
    height: 35px;
  }

  .comment-input {
    margin-left: 21px;
    margin-right: 24px;
    padding: 5px 15px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    color: #38c948;
    border: none;
    outline: none;
    width: 100%;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #c4c4c4;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c4c4c4;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #c4c4c4;
    }
  }

  @media (min-width: 576px) {
    padding: 10px 35px 10px 59px;
  }
  @media (min-width: 768px) {
    position: sticky;
    top: 100%;
    bottom: 0px;
  }
`;

export const PropertyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 30px;
  @media (min-width: 576px) {
    padding: 20px 45px;
  }
`;
