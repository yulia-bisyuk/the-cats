import styled from "styled-components";

const GreetingSection = styled.section`
  width: 446px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 44px;
  line-height: 1.32;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 10px;
`;
const WelcomeTxt = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: ${(props) => props.theme.lightGrayTxtColor};
  margin-bottom: 60px;
`;
const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
  color: ${(props) => props.theme.titleColor};
  margin-bottom: 20px;
`;

export { GreetingSection, Title, WelcomeTxt, SubTitle };
