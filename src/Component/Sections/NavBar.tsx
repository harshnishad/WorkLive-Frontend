import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Logo.png'
const Navbar = styled.nav`
  background-color: #2c3e50;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #34495e;
  }
`;

const Logo = styled.img`
  margin:0;
  padding:0;
  font-size: 1.8rem;
  color: #ecf0f1;
  font-weight: bold;
  letter-spacing: 2px;
  transition: transform 0.3s ease;
  height:6vh;
  width:10vw;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin-left: 25px;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
  color: #ecf0f1;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #f39c12;
    transform: translateY(-3px);
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f39c12;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const NavBar = () => {
    return (
        <Navbar>
            <Logo src={logo} />
            <NavLinks>
                <NavLink>
                    <Link href="#home">Home</Link>
                </NavLink>
                <NavLink>
                    <Link href="#about">About</Link>
                </NavLink>
                <NavLink>
                    <Link href="#services">Services</Link>
                </NavLink>
                <NavLink>
                    <Link href="#contact">Contact</Link>
                </NavLink>
            </NavLinks>
        </Navbar>
    );
};

export default NavBar;
