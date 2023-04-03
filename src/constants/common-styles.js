import styled from "styled-components";

const PagesWrapper = styled.div`
  width: 100%;
  @media (min-width: 1440px) {
    width: 680px;
  }
  background-color: ${(props) => props.theme.lightGreyBgColor};
  border-radius: 20px;
`;

const PagesContentWrapper = styled.div`
  position: relative;
  width: 100%;
  /* min-height: 770px; */
  /* height: fit-content; */
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

export { PagesWrapper, PagesContentWrapper };
