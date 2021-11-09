import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import MobileNavigation from "./components/MobileNavigation";
import { createTheme } from "@mui/material/styles";
import DesktopNavigation from "./components/DesktopNavigation";

// https://mui.com/customization/default-theme/?expand-path=$.palette
const darkTheme = createTheme({ palette: { mode: "dark" } });
// const lightTheme = createTheme({ palette: { mode: "light" } });
const theme = darkTheme;

function App() {
  const mobilePortrait = useMediaQuery(
    "(max-width:768px)",
    "(orientation:portrait)"
  );
  const mobileLandscape = useMediaQuery(
    "(max-width:850px)",
    "(orientation:landscape)"
  );
  const mobile = mobilePortrait || mobileLandscape;

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Box
            sx={{
              height: "100%",
            }}>
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
        </Router>
      </header>
    </div>
  );
}

export default App;
