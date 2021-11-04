import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DesktopNavigation(props) {
  const { indicator } = props;
  const [value, setValue] = React.useState(indicator || 0);
  const matches = useMediaQuery("(max-width:1200px)");

  const StyledTabs = withStyles({
    indicator: {
      backgroundColor: "white",
    },
  })(Tabs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    navigation: {
      position: "fixed",
      top: indicator === "portfolio" ? "5%" : "50%",
      right: matches && indicator === "about" ? "null" : 0,
      left: matches && indicator === "about" ? 0 : null,
      left: indicator === "portfolio" ? "50%" : null,
      transform: "translate(-50%, -50%)",
      textAlign: "right",
      marginRight: "1.5vw",
      marginLeft: "4em",
      color: "white",
      background: "rgba(33, 33, 33, .8)",
      marginBottom: "5px",
      padding: "10px",
      borderRadius: "10px",
      // display: "table",
      // textAlign: "left",
      // marginBottom: "5px",
      // padding: "10px",
      // borderRadius: "10px",
      // paddingRight: "50vw",
      // zIndex: -0,

      // top: "20%",
      // right: "1vh",
      // width: "10vw",
      // height: "100vh",
      // paddingBottom: "1vh",
      // paddingLeft: "0vw",
    },
    tab: {
      marginTop: "2em",
      marginBottom: "2em",
      color: "white",
    },
  };

  return (
    <div sx={{ alignItems: "end" }}>
      <StyledTabs
        style={styles.navigation}
        value={value}
        onChange={handleChange}
        orientation={indicator === "portfolio" ? "horizontal" : "vertical"}
        variant="scrollable"
        indicatorColor="primary"
        aria-label="icon label tabs example">
        <Tab
          style={styles.tab}
          icon={<InfoIcon />}
          component={Link}
          to="/about"
          value="about"
          label="About"
        />
        <Tab
          style={styles.tab}
          icon={<FavoriteIcon />}
          component={Link}
          to="/portfolio"
          value="portfolio"
          label="Portfolio"
        />
        <Tab
          style={styles.tab}
          icon={<ContactPageIcon />}
          component={Link}
          to="/contact"
          value="contact"
          label="Contact"
        />
      </StyledTabs>
    </div>
  );
}
