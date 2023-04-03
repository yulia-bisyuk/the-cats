import styled from "styled-components";

const LogList = styled.ul`
  margin-top: 52px;
  list-style-type: none;
  padding-left: 0px;
`;
const LogListItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  background-color: ${(props) => props.theme.lightGreyBgColor};
  border-radius: 10px;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 18px 25px;
  }
`;
const Time = styled.span`
  margin-right: 20px;
  padding: 3px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
`;
const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.lightGrayTxtColor};
`;
const Id = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.titleColor};
`;
const Icon = styled.svg`
  margin-left: 5px;
  @media (min-width: 768px) {
    margin-left: auto;
  }
`;

export { LogList, LogListItem, Time, Text, Id, Icon };
