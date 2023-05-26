import styled from 'styled-components';

export const MainArea = styled.div`
  .x3-body {
    padding: 35px;
    border-radius: 20px;
    background-image: linear-gradient(to bottom right, #1b1c1e, #832e62);
    @media screen and (max-width: 991px) {
      margin: 20px;
    }
  }
  .x3-body-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 1700px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .x3-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    font-size: 50px;
    font-weight: 700;
    color: #fff;
    @media screen and (max-width: 991px) {
      margin: 20px;
      font-size: 18px;
    }
  }
  .x3-item {
    padding: 20px;
    border-radius: 15px;
    color: #fff;
    display: grid;
    align-items: center;
    gap: 30px;
    transition: 0.3s;
  }
  .box_color_zZz {
    background: #CE3F93;
  }
  .x3-item:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }
  .x3-item h3 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #a1b5ff;
    font-weight: 500;
    font-size: 16px;
  }

  .x3-item ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    gap: 20px;
  }
  .list-2x {
    display: flex;
    gap: 10px;
  }
  .x3-item ul svg {
    color: #6285ff;
    height: auto;
    width: 35px;
  }
  .x3-item ul li {
    text-align: center;
  }

  .x3-item ul li > div {
    display: flex;
    gap: 10px;
  }

  .x3-item ul li > div svg {
    height: auto;
  }

  .x3-item ul li div svg {
    width: 15px !important;
  }
  .x3-item ul li.active svg {
    color: #fff;
  }

  .x3-item p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .x3-item h3 span {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .x3-item h3 span svg {
    height: auto;
    width: 16px;
  }
  .x3-item p span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
  }
  .x3-item:hover {
    filter: brightness(1.1);
    cursor: pointer;
    transition: 0.3s;
  }
  .x3-item ul li div .list-1x svg {
    width: 20px !important;
  }

  .x3-item ul li div .list-2x svg {
    width: 12px !important;
  }
  ul.popup-body li .pop-2x {
    display: block;
  }

  ul.popup-body li .pop-2x span {
    width: 50px;
    height: 50px;
  }

  ul.popup-body li .pop-3x span {
    height: 30px;
    width: 30px;
    margin-top: 10px;
  }
  .x3-footer ul {
    display: flex;
    align-items: center;
    color: #fff;
    margin-top: 50px;
    gap: 40px;
    @media screen and (max-width: 991px) {
      display: grid !important;
      gap: 20px !important;
    }
  }

  .x3-footer ul li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .x3-footer ul li:nth-child(2) svg {
    color: #69d4fa;
  }
  .x3-item:hover {
    filter: brightness(1.1);
    cursor: pointer;
    transition: 0.3s;
  }

  .x3-footer ul {
    display: flex;
    align-items: center;
    color: #fff;
    margin-top: 50px;
    gap: 40px;
  }

  .x3-footer ul li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .x3-footer ul li:nth-child(2) svg {
    color: #69d4fa;
  }

  .x3-list {
    background: #242526;
    margin: 40px 0;
    border-radius: 20px;
    padding: 10px 30px 30px;
    color: #fff;
    @media screen and (max-width: 991px) {
      margin: 40px 20px;
    }
  }

  .x3-list table {
    width: 100%;
    table-layout: auto;
    min-width: max-content;
    border-collapse: collapse;
  }

  .x3-list tr {
    font-size: 16px;
    line-height: 1rem;
  }

  .x3-list thead th {
    text-align: left;
    color: #929293;
    font-weight: 400;
    font-size: 14px;
  }

  .x3-list thead th:last-child {
    text-align: right;
  }

  .x3-list thead {
    border-bottom: 1px solid #3a3a3b;
    height: 50px;
  }

  .x3-list tbody tr {
    border-bottom: 1px solid #3a3a3b;
  }

  .x3-list tbody td {
    padding: 15px 0;
    font-size: 14px;
  }

  .x3-list tbody td:last-child {
    text-align: right;
  }

  .x3-list tbody td:nth-child(1) svg {
    height: auto;
    width: 30px;
    color: #07e816;
  }

  .x3-list tbody td:nth-child(2) {
    color: #8d8d8e;
  }

  .x3-list tbody td:nth-child(3) {
    color: #416aff;
  }

  .x3-list tbody td:nth-child(5) svg {
    margin-left: 12px;
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    .x3-list-inner {
      overflow-x: auto;
      max-width: 100%;
    }
    .x3-list table {
      width: 180%;
    }
    .x3-header {
      margin: 20px;
      font-size: 16px;
    }
  }
  .popup-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #000000bf;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul.popup-header svg {
    height: auto;
    width: 30px;
  }

  .popup-area-inner {
    background: #3f69ff;
    padding: 40px;
    border-radius: 20px;
    width: 800px;
    position: relative;
  }

  ul.popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }

  ul.popup-header li:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
    color: hsla(0, 0%, 100%, 0.3);
  }

  ul.popup-header li {
    font-size: 40px;
    font-weight: 700;
  }

  ul.popup-header li:first-child {
    color: hsla(0, 0%, 100%, 0.3);
  }

  ul.popup-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 60px 100px;
  }

  ul.popup-body li span {
    background: #fff;
    color: #000;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin: auto;
  }
  ul.popup-body li div {
    display: flex;
    gap: 20px;
  }
  ul.popup-footer {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul.popup-footer li strong {
    display: block;
    margin-bottom: 15px;
  }

  ul.popup-footer li span {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  span.popup-close {
    position: absolute;
    right: -20px;
    top: -20px;
    cursor: pointer;
  }

  span.popup-close svg {
    color: #fff;
    height: auto;
    width: 40px;
  }

  @media screen and (max-width: 991px) {
    ul.popup-body {
      margin: 30px 10px;
      gap: 30px;
      display: grid;
    }

    ul.popup-header li {
      font-size: 20px;
    }
    ul.popup-footer {
      gap: 20px;
      display: grid;
    }
    .popup-area-inner {
      width: unset;
    }
    ul.popup-body li span {
      width: 50px;
      height: 50px;
    }
  }
`;
