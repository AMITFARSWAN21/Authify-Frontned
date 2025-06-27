// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menubar } from './Menubar';

export const Layout = () => {
  return (
    <>
      <Menubar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};
