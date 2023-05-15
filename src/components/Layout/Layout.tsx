import { Box, Typography } from "@material-ui/core";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import useStyles from "./Layout.style";


interface LayoutProps {
    showMenu?: boolean;
  }

const Layout: React.FC<LayoutProps> = ({ showMenu = false }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Header showMenu={showMenu} />
            <Outlet />
            <footer className={classes.footer}>
                <Typography variant="body2" color="inherit" align="center">
                    {'Powered by '}
                    <Link color="inherit" to="https://www.control-app.com">
                        Control-App
                    </Link>
                </Typography>
            </footer>
        </Box>
    );
};

export default Layout;
