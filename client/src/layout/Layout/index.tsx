import React from "react";
import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
      <ToastContainer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 375px;
  margin: 0 auto;
`;

export default Layout;
