import { createPortal } from "react-dom";
import { useUploadImageMutation } from "redux/catsApi";
import {
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
} from "./Modal.styled";
import sprite from "../../icons/sprite.svg";
import { useState } from "react";

const Modal = ({ onClose }) => {
  const modalRoot = document.querySelector("#modal-root");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [upload] = useUploadImageMutation();

  console.log("uploadedImage", uploadedImage);

  const handleUpload = () => {
    upload({ file: uploadedImage, sub_id: "user" });
  };

  return createPortal(
    <Overlay>
      <ModalContainer>
        <ModalCloseButton onClick={() => onClose()}>
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
        <ImageContainer>
          <UploadText>
            <DragText>Drag here</DragText> your file or{" "}
            <ClickInput
              type="file"
              id="file"
              accept=".png, .jpg, .jpeg, .gif"
              onChange={(e) => setUploadedImage(e.target.files[0])}
            />
            <ClickLabel htmlFor="file">Click here </ClickLabel>
            to upload
          </UploadText>
          {uploadedImage && (
            <Image
              alt="cat"
              src={URL.createObjectURL(uploadedImage)}
              width="558px"
              height="280px"
            />
          )}
        </ImageContainer>
        {uploadedImage ? (
          <>
            <UploadText className="file">
              Image File Name: {uploadedImage.name}
            </UploadText>
            <UploadButton onClick={handleUpload}>upload foto</UploadButton>
          </>
        ) : (
          <UploadText className="file">No file selected</UploadText>
        )}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
