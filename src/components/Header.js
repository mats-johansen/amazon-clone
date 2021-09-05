import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingCart, ShoppingCartOutlined } from '@material-ui/icons';


const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  height: 75px;
`;

const Logo = styled.img`
  width: 120px;
  object-fit: contain;
  margin: 15px 35px 0 15px
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
`;

const SearchForm = styled.input`
  width: 100%;
  height: 12px;
  padding: 10px;
  margin: 0;
  border: none;
`;

const SearchButton = styled(SearchIcon)`
  height: 22px !important;
  background-color: #cd9042;
  padding: 5px;
`;

const NavOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const SmallLinkText = styled.p`
  font-size: 10px;
`;

const BigLinkText = styled.p`
  font-size: 13px;
  font-weight: 800;
`;

const ShoppingCartNav = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingCartCount = styled.p`
   margin-left: 10px;
   margin-right: 10px;
   font-weight: 800;
   font-size: 13px;
`;


export const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo
          src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
          alt="header-logo"
        />
      </Link>

      <SearchBox>
        <SearchForm
          type="text"
        />
        <SearchButton />
      </SearchBox>

      <NavOptions>

        <NavLink to="/login">
          <LinkContainer>
            <SmallLinkText>Hello</SmallLinkText>
            <BigLinkText>Sign In</BigLinkText>
          </LinkContainer>
        </NavLink>

        <NavLink to="/">
          <LinkContainer>
            <SmallLinkText>Returns</SmallLinkText>
            <BigLinkText>& Orders</BigLinkText>
          </LinkContainer>
        </NavLink>

        <NavLink to="/">
          <LinkContainer>
            <SmallLinkText>Your</SmallLinkText>
            <BigLinkText>Prime</BigLinkText>
          </LinkContainer>
        </NavLink>

        <NavLink to="/checkout">
          <ShoppingCartNav>
            <ShoppingCartOutlined />
            <ShoppingCartCount>0</ShoppingCartCount>
          </ShoppingCartNav>
        </NavLink>
      </NavOptions>
    </Nav>
  )
};

