import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, ButtonProps, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../auth/context/AuthContext';
import { CustomLink } from './CustomLink';

const buttonProps: ButtonProps = {
  variant: "text",
  color: "inherit",
  disableFocusRipple: true
};

const NavBar = () => {
  const navigate = useNavigate();
  const { authState, onLogout } = useContext(AuthContext);
  const { user } = authState!;

  const goToSearchPage = () => {
    navigate("/search");
  };

  const logOut = () => {
    onLogout!();
    navigate("/", { replace: true });
  };

  return (
    <AppBar position="static" style={{ background: "#212121" }}>
      <Toolbar>
        <CustomLink route="/dc" text="DC" />
        <CustomLink route="/marvel" text="Marvel" />
        <Typography sx={{ ml: "auto", mr: 2 }}>{user?.username}</Typography>
        <IconButton {...buttonProps} onClick={() => goToSearchPage()}>
          <SearchIcon />
        </IconButton>
        <IconButton {...buttonProps} onClick={() => logOut()}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
