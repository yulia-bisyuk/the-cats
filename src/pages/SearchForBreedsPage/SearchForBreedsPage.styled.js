import styled from "styled-components";

const BreedNotification = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: ${(props) => props.theme.lightGrayTxtColor};
`;
const Breed = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
  color: ${(props) => props.theme.titleColor};
`;
export { BreedNotification, Breed };
