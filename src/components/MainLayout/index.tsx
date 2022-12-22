import { Header } from 'components/Header';
import { PageWrapper } from 'components/PageWrapper';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => (
  <>
    <Header />
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  </>
);
