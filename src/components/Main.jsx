import * as React from "react";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import MobileNavigation from "./MobileNavigation";
import { createTheme } from "@mui/material/styles";
import { useRef } from "react";
import DesktopNavigation from "./DesktopNavigation";

// https://mui.com/customization/default-theme/?expand-path=$.palette
const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: "light" } });
const theme = darkTheme;

export default function Main(props) {
  const { mobile } = props;
  // const [value, setValue] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.ownerDocument.body.scrollTop = 0;
  // }, [value]);

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
          // width: "100%",
          height: "100%",
        }}
        ref={ref}>
        {/* <CssBaseline /> */}
        <Route exact path="/">
          <About theme={theme} mobile={mobile} />
          {mobile && <MobileNavigation />}
        </Route>
        <Route path="/about">
          <About theme={theme} mobile={mobile} />
          {mobile && <MobileNavigation />}
        </Route>
        <Route path="/portfolio">
          <Portfolio theme={theme} />
          {mobile && <MobileNavigation />}
          {!mobile && <DesktopNavigation indicator={"portfolio"} />}
        </Route>
        <Route path="/contact">
          <Contact theme={theme} />
          {mobile && <MobileNavigation />}
          {!mobile && <DesktopNavigation indicator={"contact"} />}
        </Route>
      </Box>
      {/* </ThemeProvider> */}
    </Router>
  );
}
