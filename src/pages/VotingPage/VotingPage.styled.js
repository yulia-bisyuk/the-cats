import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 640px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  border-radius: 20px;
`;
const ImageToVote = styled.img`
  width: 640px;
  height: 360px;
  object-fit: cover;
  border-radius: 20px;
`;
const ButtonsWrapper = styled.div`
  position: absolute;
  top: 464px;
  left: 212px;
  width: 252px;
  height: 84px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 4px;
  border-radius: 20px;
  background-color: white;
`;
const ButtonLike = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 20px 0px 0px 20px;
  border-color: transparent;
  background-color: ${(props) => props.theme.green};
  cursor: pointer;
`;
const ButtonFav = styled.button`
  width: 80px;
  height: 80px;
  border-color: transparent;
  background-color: ${(props) => props.theme.pink};
  cursor: pointer;
`;
const ButtonDislike = styled.button`
  width: 80px;
  height: 80px;
  border-color: transparent;
  border-radius: 0px 20px 20px 0px;
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
`;

export {
  LoaderWrapper,
  ImageToVote,
  ButtonsWrapper,
  ButtonLike,
  ButtonFav,
  ButtonDislike,
};
