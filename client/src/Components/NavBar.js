import React from 'react';

import { Link } from 'react-router-dom';

import { StyledList } from '../Styles/List.styled';

export default function NavBar() {

    return (
        <>
            <StyledList>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </StyledList>
        </>
    )
}