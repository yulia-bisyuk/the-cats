import { createPortal } from "react-dom";
import axios from "axios";
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
  Notification,
  NotificationText,
} from "./Modal.styled";
import ClipLoader from "react-spinners/ClipLoader";
import sprite from "../../icons/sprite.svg";
import { useState, useEffect } from "react";

const Modal = ({ onClose }) => {
  axios.defaults.headers["x-api-key"] = "0b7504df-17ed-43ae-9368-17c81ca0668c";

  useEffect(() => {
    window.addEventListener("keydown", onClose);
    return () => {
      window.removeEventListener("keydown", onClose);
    };
  });

  const modalRoot = document.querySelector("#modal-root");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageIsUploaded, setImageIsUploaded] = useState(false);
  const [uploadingError, setUploadingError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    axios
      .post(
        `https://api.thecatapi.com/v1/images/upload`,
        {
          file: uploadedImage,
          sub_id: "user",
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then((res) => {
        console.log("res", res);
        console.log("res.status", res.status);
        if (res.status === 201) {
          setIsUploading(false);
          setUploadingError(false);
          setImageIsUploaded(true);
          setUploadedImage(null);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsUploading(false);
        setUploadingError(true);
        setImageIsUploaded(false);
        setUploadedImage(null);
      });
  };

  return createPortal(
    <Overlay onClick={(e) => onClose(e)}>
      <ModalContainer>
        <ModalCloseButton onClick={(e) => onClose(e)}>
          <svg onClick={(e) => onClose(e)} width="20" height="20">
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
            <UploadButton type="button" onClick={handleUpload}>
              {isUploading ? (
                <ClipLoader color="white" size="16px" />
              ) : (
                "upload foto"
              )}
            </UploadButton>
          </>
        ) : (
          <UploadText className="file">No file selected</UploadText>
        )}
        {uploadingError && (
          <Notification>
            <svg width="20" height="20">
              <use href={sprite + "#icon-error-20"} />
            </svg>
            <NotificationText>
              No Cat found - try a different one
            </NotificationText>
          </Notification>
        )}
        {imageIsUploaded && (
          <Notification>
            <svg width="20" height="20">
              <use href={sprite + "#icon-success-20"} />
            </svg>
            <NotificationText>
              Thanks for the Upload - Cat found!
            </NotificationText>
          </Notification>
        )}
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
