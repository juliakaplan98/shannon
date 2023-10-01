import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationData } from './NavigationData';


const Navbar = styled.nav`
  background: rgba(237,85,35,1);
  height: 65px;
  display: flex;
  width:100%;
  z-index: 12;
  position: fixed;
  top:0px;
  align-items: center;
`
const NavbarLinks = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-family: Georgia, serif;
    font-weight: 500;
    cursor: pointer;
    padding:25px;
    
    font-size: 17px;
    &:hover {
        color: #000000;
    }
`
const NavbarItems = styled.li`
    list-style: none;
    line-height: 4.5;
    
`
const Navigation: React.FunctionComponent = () => {
    return (
        <>
        <Navbar>
            {NavigationData.map((item, index) => {
                    return (
                        <>
                        <NavbarItems key={index}>
                            <NavbarLinks to={item.path}>
                                
                                <span>{item.title}</span>
                            </NavbarLinks>
                        </NavbarItems>
                        </>
                    )
                })} 
        </Navbar> 
    </>
    )
}

export default Navigation;

