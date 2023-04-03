import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FormWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 428px;
    margin-top: 0;
  }

  @media (min-width: 1440px) {
    width: 470px;
  }
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
  width: 100%;
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

const LinksWrap = styled.div`
  display: flex;
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
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Btn = ReactionLink.withComponent("button");

const BurgerBtn = styled(Btn)`
  cursor: pointer;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export {
  FormWrapper,
  Form,
  FormLabel,
  FormInput,
  SubmitBtn,
  BurgerBtn,
  LinksWrap,
  ReactionLink,
};
