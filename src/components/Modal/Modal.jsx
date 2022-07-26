import { createPortal } from "react-dom";
import {
  Overlay,
  ModalContainer,
  ModalCloseButton,
  ModalTitle,
  PrivacyText,
  PrivacyLink,
  ImageContainer,
} from "./Modal.styled";
import sprite from "../../icons/sprite.svg";

const Modal = () => {
  const modalRoot = document.querySelector("#modal-root");
  return createPortal(
    <Overlay>
      <ModalContainer>
        <ModalCloseButton>
          <svg width="20" height="20">
            <use href={sprite + "#icon-close-20"} />
          </svg>
        </ModalCloseButton>
        <ModalTitle>Upload a .jpg or .png Cat Image</ModalTitle>
        <PrivacyText>
          Any uploads must comply with the{" "}
          <PrivacyLink href="https://thecatapi.com/privacy">
            upload guidelines
          </PrivacyLink>{" "}
          or face deletion.
        </PrivacyText>
        <ImageContainer></ImageContainer>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
