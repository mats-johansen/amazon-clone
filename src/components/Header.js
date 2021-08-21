import React from 'react';
import styled from 'styled-components';


const Nav = styled.div`
    width: 500px;
    margin: 5px;
`;

const Logo = styled.img`
    width: 50px;
`;





export const Header = () => {
    return (

        <Nav>
            <Logo
                className="header-logo"
                src="https://logo-base.com/logo/amazon-logo.png"
                alt="header-logo"
            />
            
        </Nav>
    )
}

