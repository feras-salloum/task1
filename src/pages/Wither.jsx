import { Button } from "@mui/material";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PublicIcon from "@mui/icons-material/Public";

let wither = 0;
function Wither() {
  const [temp, setTemp] = useState(0);
  const [cityinput, cyteTemp] = useState("city");

  function getCity() {
    const url = `http://api.weatherapi.com/v1/current.json?key=c28d853eb3c9453191524327242108&q=${cityinput}`;
    name();
    async function name() {
      const response = await fetch(url);
      const result = await response.json();
      wither = result.current.windchill_c;
      console.log(url);
    }
  }

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="wither">
      <div className="temp">
        {cityinput} Temp Now:{temp} C
        <Button
          variant="contained"
          onClick={() => {
            setTemp([wither]);
          }}
        >
          get temp
        </Button>
      </div>
      <div className="LIst">
        <List
          sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Select a city
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="Available cities" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Cairo");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Cairo" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Starred");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Kabul");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Kabul" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Tirana");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Tirana" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Luanda");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Luanda" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Yerevan");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Yerevan" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Canberra");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Canberra" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Baku");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Baku" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Nassau");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Nassau" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Manama");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Manama" />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => {
                  cyteTemp("Dhaka");
                  setTemp("");
                  getCity(cityinput);
                }}
              >
                <ListItemText primary="Dhaka" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>

    </div>
  );
}

export default Wither;
