import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Container, Footer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
      <Footer>
        Copyright <span>©</span> 2023 All Rights Reserved.
      </Footer>
    </>
  );
};