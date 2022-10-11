import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  route: string;
  text: string;
};

export const CustomLink = ({ route, text }: Props) => {
  return (
    <>
      <Link
        sx={{ mr: 1 }}
        underline="hover"
        color="inherit"
        variant="body1"
        component={RouterLink}
        to={route}>
        {text}
      </Link>
    </>
  );
};
