import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 680px;
  height: 710px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteFavouriteButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: transparent;
  background-color: white;
  cursor: pointer;
`;
export { DeleteFavouriteButton, LoaderWrapper };
