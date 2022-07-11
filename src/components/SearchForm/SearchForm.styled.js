import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const FormField = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 470px;
  height: 60px;
  border-radius: 20px;
  border-color: transparent;
  background-color: white;
`;
const FormInput = styled.input`
  margin-left: 15px;
  border: none;
  width: 240px;
  height: 25px;

  ::placeholder {
    color: ${props => props.theme.lightGrayTxtColor};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }
  :active,
  :focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 10px;
  border-color: transparent;
  background-color: ${props => props.theme.lightPink};
`;
const ReactionLink = styled(Link)`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
`;

export {
  FormWrapper,
  FormLabel,
  FormInput,
  FormField,
  SubmitBtn,
  ReactionLink,
};
