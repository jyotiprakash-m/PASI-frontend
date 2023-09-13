// components/Layout.js
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      {/* Left Sidebar and Top navbar */}

      <h1>Layout page</h1>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
