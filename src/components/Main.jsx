import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ActionAreaCard from "./ActionAreaCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import SimpleMediaQuery from "./SimpleMediaQuery";
import Home from "./Home";
import FixedBottomNavigation from "./FixedBottomNavigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect, useRef } from "react";
import DesktopNavigation from "./DesktopNavigation";

// https://mui.com/customization/default-theme/?expand-path=$.palette
const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });
const theme = darkTheme;

export default function Main(props) {
  const { mobile } = props;
  const [value, setValue] = useState(0);
  // const [mobile, setMobile] = useState(useMediaQuery("(min-width:600px)"));
  const ref = useRef(null);

  useEffect(() => {
    // setMobile(matches);
    console.log(mobile);

    // ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  // function SimpleMediaQuery() {
  //   const matches = useMediaQuery("(min-width:600px)");
  //   setMobile(matches);
  //   console.log("mobile: " + matches);
  //   // return <span>{`(min-width:600px) matches: ${matches}`}</span>;
  // }

  const SimpleMediaQuery = () => {
    const matches = useMediaQuery("(min-width:600px)");
    //   setMobile(matches);
    //   console.log("mobile: " + matches);
  };

  return (
    <Router>
      {/* <ThemeProvider theme={theme}> */}
      <Box
        sx={{
          // p: 1,
          // bgcolor: "background.default",
          // bgcolor: "#FFF",
          // background:
          //   "-webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 34, 255, 0.6), rgba(0, 0, 0, 0.8))",
          width: "100%",
          height: "100%",
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        ref={ref}>
        {/* <CssBaseline /> */}
        {/* <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="column"
          justifyContent="center"
          alignItems="center"> */}
        <Route exact path="/">
          <About theme={theme} mobile={mobile} />
          {mobile && <FixedBottomNavigation />}
          {/* {!mobile && <DesktopNavigation />} */}
        </Route>
        <Route path="/about">
          <About theme={theme} mobile={mobile} />
          {mobile && <FixedBottomNavigation />}
          {/* {!mobile && <DesktopNavigation />} */}
        </Route>
        <Route path="/portfolio">
          <Portfolio theme={theme} />
          {mobile && <FixedBottomNavigation />}
          {!mobile && <DesktopNavigation indicator={"portfolio"} />}
        </Route>
        <Route path="/contact">
          <Contact theme={theme} />
          {mobile && <FixedBottomNavigation />}
          {!mobile && <DesktopNavigation indicator={"contact"} />}
        </Route>
        {/* </Switch> */}
        {/* </Grid> */}
      </Box>
      {/* </ThemeProvider> */}
    </Router>
  );
}
