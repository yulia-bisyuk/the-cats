import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FormWrapper = styled.div`
  width: 680px;
  margin-bottom: 10px;
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

const FormLabel = styled.label`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  width: 470px;
  height: 60px;
  padding: 0px 20px 0px 20px;
  outline: none;
  border-style: solid;
  border-radius: 20px;
  border-color: transparent;
  background-color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleTextColor};

  ::placeholder {
    color: ${(props) => props.theme.lightGrayTxtColor};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }
  :hover {
    border-color: ${(props) => props.theme.lightPink};
  }
  :active,
  :focus {
    border-color: ${(props) => props.theme.pink};
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border-color: transparent;
  background-color: ${(props) => props.theme.lightPink};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.pink};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${(props) => props.theme.pink};
  }
`;

const ReactionLink = styled(NavLink)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
  svg {
    fill: ${(props) => props.theme.pink};
  }

  &:hover {
    background-color: ${(props) => props.theme.lightPink};
  }

  &.active {
    background-color: ${(props) => props.theme.pink};
    svg {
      fill: white;
    }
  }
`;

export { FormWrapper, FormLabel, FormInput, SubmitBtn, ReactionLink };
