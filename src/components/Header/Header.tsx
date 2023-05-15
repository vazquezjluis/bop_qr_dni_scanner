// src/components/Header/Header.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useStyles from './Header.styles';

interface HeaderProps {
    showMenu: boolean;
}

const Header: React.FC<HeaderProps> = ({ showMenu }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useNavigate();
    const { signOut } = useAuth();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleScannerClick = () => {
        history('/scanner');
        handleClose();
    };

    const handleHistoryClick = () => {
        history('/historial');
        handleClose();
    };

    const handleLogoutClick = () => {
        signOut();
        history('/login');
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'black', marginBottom: '30px', height: '80px', paddingTop: '10px' }}>
            <Toolbar>
                <img src="./img/logo.jpeg" alt="Bingo Oasis Pilar"  className={classes.logo} />
                <Typography variant="caption" className={classes.title}>
                    Document Scanner - Bingo Oasis Pilar
                </Typography>
                {showMenu && (
                    <>
                        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleScannerClick}>Scanner</MenuItem>
                            <MenuItem onClick={handleHistoryClick}>Historial</MenuItem>
                            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
