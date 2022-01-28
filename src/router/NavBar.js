import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  const navLinkStyle = ({ isActive }) => {
      
      return {
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none" : "underline" 
      }
  }
  return (
        <nav>
            <NavLink style={navLinkStyle} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} to="/about">About</NavLink>
            <NavLink style={navLinkStyle} to="/nesting">Nesting</NavLink>
        </nav>
    );
};

//NavLink 는 페이지 주소와, Link 에서의 'to'가 동일할때 class 를 active 해줌