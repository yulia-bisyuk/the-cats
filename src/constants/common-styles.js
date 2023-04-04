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
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 206px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 360px;
  }
`;

export { PagesWrapper, PagesContentWrapper, LoaderWrapper };
