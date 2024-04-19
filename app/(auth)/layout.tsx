import React from 'react';
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex h-screen w-full items-center justify-center'>
      {children}
    </main>
  );
};
export default Layout;
