import styled from "styled-components";
import { Container } from "components/Layout/Layout.styled";
import { ModalCloseButton } from "components/Modal/Modal.styled";

const MobileMenuContainer = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100vh;
  background-color: ${(props) => props.theme.lightGreyBgColor};
`;

const CloseButton = styled(ModalCloseButton)`
  display: block;
  position: static;
  margin-left: auto;
  margin-bottom: 20px;
`;

export { MobileMenuContainer, CloseButton };
