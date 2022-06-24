import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { Navbar } from "./Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
