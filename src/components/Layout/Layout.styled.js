import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  @media (min-width: 375px) {
    width: 375px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 30px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
  }
`;
