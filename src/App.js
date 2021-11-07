// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const mobilePortrait = useMediaQuery(
    "(max-width:768px)",
    "(orientation:portrait)"
  );
  const mobileLandscape = useMediaQuery(
    "(max-width:850px)",
    "(orientation:landscape)"
  );
  const isMobile = mobilePortrait || mobileLandscape;

  console.log(isMobile);

  return (
    <div className="App">
      <header className="App-header">
        <Main mobile={isMobile} />
      </header>
    </div>
  );
}

export default App;
