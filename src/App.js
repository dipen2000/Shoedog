import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
