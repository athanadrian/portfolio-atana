import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/shared/Header';

const BaseLayout = ({
  children,
  user,
  navClass = 'with-bg',
  loading,
  className,
}) => {
  return (
    <div className='layout-container'>
      <Header className={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className='wrapper'>{children}</div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
