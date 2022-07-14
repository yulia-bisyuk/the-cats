import styled from 'styled-components';

const LogList = styled.ul`
  margin-top: 52px;
  list-style-type: none;
  padding-left: 0px;
`;
const LogListItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  background-color: ${props => props.theme.lightGreyBgColor};
  border-radius: 10px;
`;
const Time = styled.span`
  width: 61px;
  height: 30px;
  margin-right: 20px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.titleColor};
`;
const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.lightGrayTxtColor};
`;
const Id = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.titleColor};
`;
const Icon = styled.svg`
  margin-left: auto;
  margin-right: 20px;
`;

export { LogList, LogListItem, Time, Text, Id, Icon };
