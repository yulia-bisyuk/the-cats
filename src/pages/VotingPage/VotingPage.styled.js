import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 640px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGreyBgColor};
  border-radius: 20px;
`;
export { LoaderWrapper };
