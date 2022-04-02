import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavRoutes />
    </div>
  );
}

export default App;
