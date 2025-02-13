// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Slide, useScrollTrigger } from '@mui/material';
import { observer } from 'mobx-react-lite';
import authStore from '../stores/AuthStore.js';
import logo from '../assets/gs-logo-new.svg';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="in" in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = observer(() => {
    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed" sx={{ bgcolor: '#22263f' }}>
                    <Toolbar>
                        <img src={logo} alt="Goldman Sachs Logo" style={{ height: '28px', marginRight: '10px' }} />
                        {!authStore.isAuthenticated && (
                            <Button color="inherit">Login</Button>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {authStore.isAuthenticated && (
                <AppBar position="sticky" sx={{ width: '100%', bgcolor: '#22263f', top: 0, mt: 8, borderTop: '1px solid #fff', borderBottom: '1px solid #fff' }}>

                    <Toolbar>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Account</Button>
                        <Button color="inherit">Transact</Button>
                        <Button color="inherit">Taxes</Button>
                        <Button color="inherit">Market & Insights</Button>
                        
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
});

export default Header;
