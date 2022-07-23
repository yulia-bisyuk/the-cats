import styled from "styled-components";

const BreedButton = styled.button`
  width: 180px;
  height: 34px;
  margin-bottom: 10px;
  margin-top: auto;
  background-color: white;
  border-color: transparent;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme.pink};
  cursor: pointer;
`;

const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SelectField = styled.select`
  appearance: none;
  width: 226px;
  height: 40px;
  padding-left: 14px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }
`;
const LimitField = styled.select`
  appearance: none;
  width: 101px;
  height: 40px;
  padding-left: 14px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }
`;

const SortButton = styled.button`
  width: 40px;
  height: 40px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  cursor: pointer;
`;

export { BreedButton, SelectsWrapper, SortButton, SelectField, LimitField };
