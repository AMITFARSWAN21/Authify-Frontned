// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menubar } from './Menubar';
import ChatBot from './ChatBot';

export const Layout = () => {
  return (
    <>
      <Menubar />
      <div className="mt-5">
        <ChatBot/>
        <Outlet />
      </div>
    </>
  );
};
