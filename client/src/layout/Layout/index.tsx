import React from "react";
import { ToastContainer } from "react-toastify";
import { LayoutContainer } from "layout/Layout/styles";
import { TOAST_DURATION } from "constants/toast";

import "react-toastify/dist/ReactToastify.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
      <ToastContainer autoClose={TOAST_DURATION} />
    </LayoutContainer>
  );
};

export default Layout;
