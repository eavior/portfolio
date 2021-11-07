import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function MobileNavigation() {
  const [value, setValue] = React.useState(0);
  // const ref = React.useRef(null);

  React.useEffect(() => {
    // ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
          console.log(newValue);
        }}>
        <BottomNavigationAction
          component={Link}
          to="/about"
          value="about"
          label="About"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/portfolio"
          value="portfolio"
          label="Portfolio"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/contact"
          value="contact"
          label="Contact"
          icon={<ContactPageIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
