import styled from 'styled-components'

export const HyperTooltipContainer = styled.div`
    display: flex;
    position: relative;

    /* Absolute positioning */
    .Tooltip-Tip {
      position: absolute;
      border-radius: 8px;
      left: 50%;
      transform: translateX(-50%);
      padding: 13px 20px 10px 20px;
      min-width: 125px;
      color: #FFFFFF;
      background: #222430;
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      z-index: 100;
      white-space: nowrap;
      text-align: center;
      box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    /* CSS border triangles */
    .Tooltip-Tip::before {
      content: " ";
      left: 50%;
      border: solid transparent;
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-width: 6px;
      margin-left: calc(6px * -1);
    }

    /* Absolute positioning */
    .Tooltip-Tip.top {
      top: calc(30px * -1);
    }
    /* CSS border triangles */
    .Tooltip-Tip.top::before {
      top: 100%;
      border-top-color: #222430;
    }

    /* Absolute positioning */
    .Tooltip-Tip.right {
      left: calc(100% + 30px);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
    /* CSS border triangles */
    .Tooltip-Tip.right::before {
      left: calc(6px * -1);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-right-color: #222430;
    }

    /* Absolute positioning */
    .Tooltip-Tip.bottom {
      bottom: calc(30px * -1);
    }
    /* CSS border triangles */
    .Tooltip-Tip.bottom::before {
      bottom: 100%;
      border-bottom-color: #222430;
    }

    /* Absolute positioning */
    .Tooltip-Tip.left {
      left: auto;
      right: calc(100% + 30px);
      top: 50%;
      transform: translateX(0) translateY(-50%);
    }
    /* CSS border triangles */
    .Tooltip-Tip.left::before {
      left: auto;
      right: calc(6px * -2);
      top: 50%;
      transform: translateX(0) translateY(-50%);
      border-left-color: #222430;
    }
`;