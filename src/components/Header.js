// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Slide, useScrollTrigger,Typography } from '@mui/material';
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
             {authStore.isAuthenticated && (<HideOnScroll>
                <AppBar position="fixed" sx={{ bgcolor: '#22263f' }}>
                    <Toolbar>
                        <img src={logo} alt="Goldman Sachs Logo" style={{ height: '28px', marginRight: '10px' }} />
                        {!authStore.isAuthenticated && (
                            <Button color="inherit">Login</Button>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
             )}
             <AppBar position="fixed" sx={{ bgcolor: '#22263f' }}>
                    <Toolbar>
                        <img src={logo} alt="Goldman Sachs Logo" style={{ height: '28px', marginRight: '10px' }} />
                        {!authStore.isAuthenticated && (
                            <Button color="inherit">Login</Button>
                        )}
                    </Toolbar>
                </AppBar>
            {authStore.isAuthenticated && (
                <AppBar elevation={0}  position="sticky" sx={{ width: '100%', bgcolor: '#22263f', top: 0, mt: 8, borderTop: '1px solid #fff', borderBottom: '1px solid #fff' }}>

<Toolbar>
                        <Button color="inherit">
                            <Typography variant="button" sx={{ textTransform: 'none' }}>Home</Typography>
                        </Button>
                        <Button color="inherit">
                            <Typography variant="button" sx={{ textTransform: 'none' }}>Account</Typography>
                        </Button>
                        <Button color="inherit">
                        <Typography variant="button" sx={{ textTransform: 'none' }}>Transact</Typography>
                        </Button>
                        <Button color="inherit">
                        <Typography variant="button" sx={{ textTransform: 'none' }}>Taxes</Typography>
                        </Button>
                        <Button color="inherit">
                        <Typography variant="button" sx={{ textTransform: 'none' }}>Market and insights</Typography>
                        </Button>
                        
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
});

export default Header;
