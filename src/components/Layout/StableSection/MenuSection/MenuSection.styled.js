import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
const MenuLink = styled(NavLink)`
  width: 138px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border-color: transparent;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 2px;
  color: ${(props) => props.theme.pink};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.lightPink};
  }
  &.active {
    background-color: ${(props) => props.theme.pink};
    color: white;
  }
`;
export { ImgWrapper, FlexWrapper, MenuLink };
