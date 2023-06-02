import logo from "./logo.svg";
import "./App.css";
import Home from "./Container/Home/index";
import HeaderDashboard from "./Component/Header/index";
import Dashboard from "./Component/DashboardCard/index";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
