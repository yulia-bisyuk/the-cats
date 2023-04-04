import styled from "styled-components";

const BtnsWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const GoBackBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 10px;
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
const CurrentPagePointer = styled.div`
  padding: 5px 30px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  background-color: ${(props) => props.theme.pink};
`;
export { GoBackBtn, CurrentPagePointer, BtnsWrapper };
