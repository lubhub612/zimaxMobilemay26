import styled from 'styled-components';

export const HoverButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #ffffff;
  cursor: pointer;
  user-select: none;

  .btn-naked {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: #ffffff;
    border: 1px solid #38c948;
    background: rgba(0, 0, 0, 0.25);
    padding: 6px 12px;
    transition: all 0.5s;

    &:hover {
      background: #38c948;
      color: #000;
    }
  }

  .btn-unnaked {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    color: #000;
    border: 1px solid #38c948;
    background: #38c948;
    padding: 6px 12px;
    transition: all 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.25);
      color: #fff;
    }
  }
`;
