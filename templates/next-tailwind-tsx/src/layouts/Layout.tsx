import React, { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className='dark:bg-black dark:text-white'>{children}</div>;
};

export default Layout;
