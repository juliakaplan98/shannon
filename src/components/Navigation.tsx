import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { NavigationData } from './NavigationData'

const Navbar = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`
const NavbarLinks = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #000000;
        
    }
`
const NavbarItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;   
`
const NavbarMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;  
`



const Navigation: React.FunctionComponent = () => {

    return (
        <>
        <Navbar>
            <NavbarItems />
            <NavbarMenu>
            {NavigationData.map((item, index) => {
                    return (
                        <NavbarItems key={index}>
                            <NavbarLinks to={item.path}>
                                
                                <span>{item.title}</span>
                            </NavbarLinks>
                        </NavbarItems>
                    
                    )
                })}
           </NavbarMenu>
        </Navbar>

  

            
      
        
    </>
    )
}

export default Navigation

