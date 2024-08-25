import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import VideoFileIcon from '@mui/icons-material/VideoFile';
import TranslateIcon from '@mui/icons-material/Translate';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ width: "100%", zIndex:100, position:"fixed"}}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "25px",
            backgroundColor: "white",
          }}
        >
          <div className="MENU">
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <MenuIcon sx={{ marginRight: "10px" }} />
              Menu
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <Link className="MenuLink" to="/wither">
                  <Brightness7Icon />
                  wither
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link className="MenuLink" to="/movies">
                  <VideoFileIcon />
                  movies
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link className="MenuLink" to="/Translation">
                  <TranslateIcon />
                  Translation
                </Link>
              </MenuItem>
            </StyledMenu>
          </div>
          <div className="BottomNavigation">
            <Link className="nacLink" to="/wither">
              <Brightness7Icon />
              wither
            </Link>
            <Link className="nacLink" to="/movies">
              <VideoFileIcon />
              movies
            </Link>
            <Link className="nacLink" to="/Translation">
              <TranslateIcon />
              Translation
            </Link>
          </div>
          <Button
            sx={{ color: "#1976d2", fontSize: "16px", fontWeight: "bold" }}
          >
            <Link to="/">Sume API</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
