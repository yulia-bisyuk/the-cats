import styled from "styled-components";

const BackgroundRectangle = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
  position: relative;
  width: 680px;
  height: 840px;

  background: ${(props) => props.theme.lightPink};
  border-radius: 20px;
`;

const HomePageImg = styled.img`
  position: absolute;
  height: 860px;
  width: 760px;

  right: 0px;
  top: 0px;
`;

export { BackgroundRectangle, HomePageImg };
