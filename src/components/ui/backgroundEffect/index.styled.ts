import styled, { keyframes } from "styled-components";

const CyanAnim = keyframes`
    0% {
        top: 50px;
        right: 0;
    }
    25% {
        top: 254px;
        right: 20px;
    }
    50% {
        top: 324px;
        right: 138px;
    }
    75% {
        top: 2px;
        right: 429px;
    }
    100% {
        top: 50px;
        right: 0;
    }
`;

const GreenAnim = keyframes`
    0% {
        top: 274px;
        left: 454px;
    }
    25% {
        top: 235px;
        left: 183px;
    }
    50% {
        top: -96px;
        left: 466px;
    }
    75% {
        top: 0;
        left: 466px;
    }
    100% {
        top: 274px;
        left: 454px;
    }
`;

const IndigoAnim = keyframes`
    0% {
        top: 0;
        left: 322px;
    }
    25% {
        top: 0;
        left: 439px;
    }
    50% {
        top: 291px;
        left: 194px;
    }
    75% {
        top: 256px;
        left: 163px;
    }
    100% {
        top: 0;
        left: 322px;
    }
`;

const VioletAnim = keyframes`
    0% {
        top: 279px;
        left: 0;
    }
    25% {
        top: 118px;
        left: 114px;
    }
    50% {
        top: 43px;
        left: 194px;
    }
    75% {
        top: 346px;
        left: 466px;
    }
    100% {
        top: 279px;
        left: 0;
    }
`;

const Component = styled.div<{ $scale: number }>`
  width: 858px;
  height: 648px;
  transform: ${({ $scale }) => `scale(${$scale})`};
  position: relative;
`;

const Cyan = styled.div`
  width: 185px;
  height: 185px;
  border-radius: 100%;
  background-color: #00dcea;
  opacity: 0.7;
  position: absolute;
  animation: ${CyanAnim} 5200ms linear infinite;
`;

const Green = styled.div`
  width: 374px;
  height: 374px;
  border-radius: 100%;
  background-color: #00e392;
  opacity: 0.4;
  position: absolute;
  animation: ${GreenAnim} 5200ms linear infinite;
`;

const Indigo = styled.div`
  width: 235px;
  height: 235px;
  border-radius: 100%;
  background-color: #563aff;
  opacity: 0.55;
  position: absolute;
  animation: ${IndigoAnim} 5200ms linear infinite;
`;

const Violet = styled.div`
  width: 256px;
  height: 190px;
  border-radius: 100%;
  background-color: #831af0;
  opacity: 0.8;
  position: absolute;
  animation: ${VioletAnim} 5200ms linear infinite;
`;

const Blur = styled.div`
  position: absolute;
  inset: -250px;
  backdrop-filter: blur(100px);
`;

export { Component, Cyan, Green, Indigo, Violet, Blur };
