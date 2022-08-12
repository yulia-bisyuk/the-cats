import styled from "styled-components";
import dummy from "../../pages/images/upload-bg.png";

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
  &:hover {
    background-color: ${(props) => props.theme.pink};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${(props) => props.theme.pink};
  }
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
  position: relative;
  height: 320px;
  margin-bottom: 20px;
  /* padding: 20px 40px; */
  background-color: white;
  border-radius: 20px;
  border: 2px dashed #fbe0dc;
  background-image: url(${dummy});
  background-repeat: no-repeat;
  background-position: center;
`;

const UploadText = styled.p`
  margin-top: 145px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.lightGrayTxtColor};
  &.file {
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;

const DragText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
`;

const ClickInput = styled.input`
  display: none;
`;

const ClickLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
`;

const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 40px;
  width: 558px;
  height: 280px;
  border-radius: 10px;
  object-fit: cover;
`;

const UploadButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 172px;
  height: 40px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.pink};
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.lightPink};
    color: ${(props) => props.theme.pink};
  }
`;

const Notification = styled.div`
  display: flex;
  padding: 20px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
`;

const NotificationText = styled.p`
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: ${(props) => props.theme.lightGrayTxtColor};
`;

export {
  Overlay,
  ModalContainer,
  ModalCloseButton,
  ModalTitle,
  PrivacyText,
  PrivacyLink,
  ImageContainer,
  UploadText,
  DragText,
  ClickInput,
  ClickLabel,
  Image,
  UploadButton,
  Notification,
  NotificationText,
};
