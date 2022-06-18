import "./App.css";
import { NavRoutes } from "./Routes/NavRoutes";
import { Navbar } from "./Components/Navbar/Navbar";
// import { useOrder } from "./context/orderContext";

function App() {
  // const { orderState } = useOrder();
  // console.log(orderState);
  return (
    <div className="App">
      <Navbar />
      <NavRoutes />
    </div>
  );
}

export default App;
