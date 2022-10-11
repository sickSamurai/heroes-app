import { AppBar, Button, ButtonProps, Toolbar } from "@mui/material";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const buttonProps: ButtonProps = {
  sx: { ml: "auto" },
  variant: "text",
  color: "inherit",
};

const NavBar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login", { replace: false });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <CustomLink route="dc" text="DC" />
        <CustomLink route="marvel" text="Marvel" />
        <Button {...buttonProps} onClick={() => logOut()}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
