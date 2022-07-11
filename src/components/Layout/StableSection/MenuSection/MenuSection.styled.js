import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  box-sizing: border-box;
  width: 138px;
  height: 198px;
  margin-bottom: 10px;
  border-style: solid;
  border-radius: 20px;
  border-width: 4px;
`;
const MenuBtn = styled.button`
  width: 138px;
  height: 36px;
  background-color: white;
  border-radius: 10px;
  border-color: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 2px;
  color: ${props => props.theme.pink};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.lightPink};
  }
  :active {
    background-color: ${props => props.theme.pink};
    color: white;
  }
`;
export { ImgWrapper, FlexWrapper, MenuBtn };
