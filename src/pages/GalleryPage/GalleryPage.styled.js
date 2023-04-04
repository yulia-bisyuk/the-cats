import styled from "styled-components";

const Wrapper = styled.div`
  display: contents;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 10px;
  border-color: transparent;
  background-color: ${(props) => props.theme.lightPink};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.pink};
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.pink};
  }

  &:hover {
    background-color: ${(props) => props.theme.pink};
    color: white;
    svg {
      fill: white;
    }
  }

  @media (min-width: 768px) {
    width: 143px;
    margin-bottom: 0;
  }
`;

const OptionsSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px 20px;
  }
`;

const OptionLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.8;
  text-transform: uppercase;
  color: ${(props) => props.theme.lightGrayTxtColor};
`;

const OptionWrapper = styled.div`
  display: contents;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Option = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 290px;
  }
`;

const OptionSelect = styled.select`
  appearance: none;
  background-color: transparent;
  color: ${(props) => props.theme.lightGrayTxtColor};
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
`;

const OptionSelectStylingWrapper = styled.div`
  position: relative;

  margin-bottom: 10px;
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
  cursor: pointer;
  background-color: white;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.lightPink} inset;
  }

  &.limit {
    width: 100%;
    @media (min-width: 768px) {
      width: 240px;
    }
  }
`;

const DropdownIcon = styled.svg`
  position: absolute;
  right: 10px;
  top: 15px;
`;

const UpdateButton = styled.button`
  width: 100%;
  height: 40px;

  border-radius: 10px;
  border-color: transparent;
  background-color: white;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.pink};
  }

  &:hover {
    background-color: ${(props) => props.theme.pink};
    svg {
      fill: white;
    }
  }

  @media (min-width: 768px) {
    width: 40px;
    margin-left: 10px;
  }
`;

export {
  Wrapper,
  UploadButton,
  Option,
  OptionLabel,
  OptionWrapper,
  UpdateButton,
  OptionSelect,
  OptionSelectStylingWrapper,
  OptionsSection,
  DropdownIcon,
};
