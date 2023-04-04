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
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const InputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: contents;
  }
`;

const FieldWrapper = styled.div`
  position: relative;
`;

const SelectField = styled.select`
  appearance: none;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 14px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  color: ${(props) => props.theme.lightGrayTxtColor};
  cursor: pointer;

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset;
  }

  @media (min-width: 768px) {
    width: 226px;
    margin-bottom: 0;
  }
`;
const LimitField = styled.select`
  appearance: none;
  width: 195px;
  height: 40px;
  padding-left: 14px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  color: ${(props) => props.theme.lightGrayTxtColor};
  cursor: pointer;

  &:focus,
  &:active {
    border-color: transparent;
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset;
  }

  @media (min-width: 768px) {
    width: 101px;
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

    svg {
      fill: ${(props) => props.theme.pink};
    }
  }
`;

export {
  BreedButton,
  InputsWrap,
  SelectsWrapper,
  FieldWrapper,
  SortButton,
  SelectField,
  LimitField,
};
