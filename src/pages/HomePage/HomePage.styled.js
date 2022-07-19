import styled from "styled-components";

const HomePageWrapper = styled.div`
  max-width: 1440px;
  width: 795px;
  position: absolute;
  top: 46px;
  left: 716px;
`;

const BackgroundRectangle = styled.div`
  width: 680px;
  height: 840px;

  background: ${(props) => props.theme.lightPink};
  border-radius: 20px;
`;

const HomePageImg = styled.img`
  position: absolute;
  left: -100px;
  top: -50px;
`;

export { BackgroundRectangle, HomePageImg, HomePageWrapper };
