import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 29, 29, 0.6);
  z-index: 100;
`;

const ModalContainer = styled.div`
  width: 680px;
  height: 840px;
  padding: 100px 20px;
  margin: 30px 30px auto auto;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  border-radius: 20px;
`;

const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 40px;
  top: 40px;
  background-color: white;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;
`;

const ModalTitle = styled.h1`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 1.44;
  text-align: center;
  color: ${(props) => props.theme.titleColor};
`;

const PrivacyText = styled.p`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme.lightGrayTxtColor};
`;

const PrivacyLink = styled.a`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.pink};
  text-decoration: none;
`;

const ImageContainer = styled.div`
  height: 320px;
  background-color: white;
  border-radius: 20px;
  border: 2px dashed #fbe0dc;
`;

export {
  Overlay,
  ModalContainer,
  ModalCloseButton,
  ModalTitle,
  PrivacyText,
  PrivacyLink,
  ImageContainer,
};
