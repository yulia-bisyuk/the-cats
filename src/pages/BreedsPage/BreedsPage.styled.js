import styled from "styled-components";

const BreedButton = styled.button`
  width: 180px;
  height: 34px;
  margin-bottom: 10px;
  margin-top: auto;
  background-color: white;
  border-color: transparent;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme.pink};
  cursor: pointer;
`;
export { BreedButton };
