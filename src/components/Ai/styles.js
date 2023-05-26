import styled, { css, keyframes } from 'styled-components';

export const MainArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1000px;
  margin: 70px auto;
  gap: 20px;
  align-items: flex-start;
  padding: 0 30px;

  @media screen and (min-width: 320px) {
    grid-template-columns: 1fr;
  }

  .left-side {
    background: #222431;
    padding: 20px;
    border-radius: 5px;
  }

  .right-side {
    background: #222431;
    padding: 20px;
    border-radius: 5px;
  }
  .tabs {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tabs button {
    width: 100%;
    background: #080a0b;
    color: #fff;
    border: none;
    padding: 15px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .tabs button.active {
    background: #a3ff11;
    color: #000;
  }

  .tab-content {
    margin-top: 20px;
  }
  .left-side h2 {
    margin: 0;
    // color: #626977;
    color:white;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .left-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left-button button {
    background: #fff;
    border: none;
    color: #000;
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .left-button .red-color {
    background: #db0d36;
    color: #fff;
  }

`;

export const Button = styled.button`
  background: #db0d36;
  color: #fff;
  border: none;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;

  ${({ isLoading }) =>
    isLoading &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
export const ButtonText = styled.span`
  ${({ isLoading }) =>
    isLoading &&
    css`
      display: none;
    `}
`;

export const ButtonLoader = styled.span`
  ${({ isLoading }) =>
    !isLoading &&
    css`
      display: none;
    `}
`;

export const GeneratedImageArea = styled.div`
.image-area {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr ;
  }
}

.image-area img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
}

.image-area h2 {
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius:5px;
  
`;

export const GeneratedImageContainer = styled.div`
max-width: 300px;
height: 400px;
display: block;
margin: 20px auto;
border-radius:5px;
`

export const Texttab = styled.div`
  input {
    width: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #4b5564;
    color: #fff;
    font-size: 14px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }
  ul li.active a {
    background: #6b7280;
  }
  ul li a {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 20px;
    border-radius: 5px;
    text-decoration: none;
    border: 1px solid #6b7381;
  }
  ul li {
    display: inline-block;
    margin: 6px;
  }
  .image-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .image-area img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    cursor: pointer;
  }

  .image-area h2 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ParamArea = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul li svg {
    cursor: pointer;
  }
`;
export const skeletonAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
`;

export const SkeletonImage = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* set the aspect ratio of the skeleton */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e6e6e6; /* set the background color of the skeleton */
    animation: ${skeletonAnimation} 1.5s ease-in-out infinite; /* set the animation */
  }
`;

