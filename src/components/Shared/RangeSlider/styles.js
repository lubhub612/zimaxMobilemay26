import styled from 'styled-components';

export const RangeSliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;

  .slider {
    position: relative;
    width: 100%;
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 0.4rem;
  }

  .slider__track {
    background-color: #c4c4c4;
    width: 98%;
    z-index: 1;
    margin-left: 5px;
  }

  .slider__range {
    background-color: #c4c4c4;
    z-index: 2;
    margin-left: 5px;
  }

  .slider__left-value,
  .slider__right-value {
    color: #dee2e6;
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 100%;
    outline: none;
  }

  .thumb--zindex-3 {
    z-index: 3;
  }

  .thumb--zindex-4 {
    z-index: 4;
  }

  .thumb--zindex-5 {
    z-index: 5;
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    background-color: #38c948;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-top: 2px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    background-color: #38c948;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-top: 2px;
    pointer-events: all;
    position: relative;
  }

  //display values
  .display-values {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
  }

  .display-value {
    padding: 4px 8px;
    width: 124px;
    height: 38px;
    background: #1c1d24;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;

    span {
      margin-left: 10px;
      font-size: 12px;
    }
  }

  .max-label,
  .min-label {
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    white-space: pre-wrap;
  }

  .display-to {
    font-size: 16px;
    font-weight: 500;
  }
`;
