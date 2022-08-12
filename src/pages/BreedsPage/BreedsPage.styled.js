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

const FieldWrapper = styled.div`
  position: relative;
  /* width: 290px; */
  /* margin-bottom: 10px;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
  cursor: pointer;
  background-color: white; */

  /* &.limit {
    width: 240px;
  } */
`;

const SelectField = styled.select`
  appearance: none;
  width: 226px;
  height: 40px;
  padding-left: 14px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  cursor: pointer;

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset;
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
  cursor: pointer;

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset;
  }
`;

const SortButton = styled.button`
  width: 40px;
  height: 40px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.lightGrayTxtColor};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.lightPink};
    /* box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset; */
    svg {
      fill: ${(props) => props.theme.pink};
    }
  }
`;

export {
  BreedButton,
  SelectsWrapper,
  FieldWrapper,
  SortButton,
  SelectField,
  LimitField,
};
