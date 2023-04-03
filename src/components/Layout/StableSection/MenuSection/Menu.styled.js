import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const MenuBlockWrap = styled.div`
  @media (min-width: 768px) {
    :not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const ImgWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 138px;
    height: 198px;
    margin-bottom: 10px;
    border-style: solid;
    border-radius: 20px;
    border-width: 4px;
  }
`;
const MenuLink = styled(NavLink)`
  width: 100%;
  height: 36px;

  margin-bottom: 20px;
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

  @media (min-width: 768px) {
    width: 138px;
  }
`;
export { ImgWrapper, MenuWrapper, MenuBlockWrap, MenuLink };
