import logo from "./logo.svg";
import "./App.css";
import MobileMain from "./components/MobileMain";
import Main from "./components/Main";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const matches = useMediaQuery("(max-width:600px)");
  console.log(matches);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <MobileMain /> */}
        <Main mobile={matches} />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
