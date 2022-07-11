import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const VotingPage = lazy(() => import('../pages/VotingPage/VotingPage'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="voting" element={<VotingPage />}/>
    
        </Routes>
      </Layout>
    </Suspense>
  );
};
