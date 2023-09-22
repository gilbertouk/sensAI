import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export const NavbarStudent = ({ handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "black", fontSize: 40 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/student/assignments">
        <MenuItem onClick={handleClose}>
          <HomeIcon sx={{ mr: 2 }} />
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AssignmentIcon sx={{ mr: 2 }} />
          Assignment
        </MenuItem>
        </Link>
        <Link to="/student/lessons">
        <MenuItem onClick={handleClose}>
          <SchoolIcon sx={{ mr: 2 }} />
          Lesson
        </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Settings sx={{ mr: 2 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
