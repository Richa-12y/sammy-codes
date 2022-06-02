// import logo from './logo.svg';
import "./App.css";
import Header from "./compontens/Header/Header";
import RouteClass from "../src/route";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouteClass />
      </Router>
    </div>
  );
}

export default App;
