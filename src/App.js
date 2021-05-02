import Home from "./Home";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Popover from "./Popover";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
