import React from 'react';
import { Link, Outlet } from "react-router-dom";

export const Nesting = () => {
  return (
      <>
        <div>
          <input type="search" placeholder='=?Search' />
        </div>
          <nav>
              <Link to="normal">normal</Link>
              <Link to="new">new</Link>
          </nav>
          <Outlet />
      </>
  )
};

export const Normal = () => {
  return <div>normal label!</div>;
};

export const New = () => {
    return <div>New Label!</div>;
  };

