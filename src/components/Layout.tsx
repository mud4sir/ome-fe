import React from 'react';
import LayoutProps from '../types/LayoutProps';
import Navigation from './Navigation';

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <Navigation content="search-bar" />
            {props.children}
        </>
    );
};

Layout.propTypes = {};

export default Layout;
