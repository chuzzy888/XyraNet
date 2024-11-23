import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
  );
};

export default Layout;
