import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { StableSection } from './StableSection/StableSection';

const Layout = ({ children }) => {
  return (
    <Container>
      <StableSection />
      {children}
      <Outlet />
    </Container>
  );
};

export default Layout;
