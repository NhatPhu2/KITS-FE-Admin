import logo from "./logo.svg";
import "./App.css";
import Home from "./Container/Home/index";
import HeaderDashboard from "./Component/Header/index";
import { Routes,Route } from "react-router-dom";
import PrimaryLayout from "./Component/Layout/Layout";
import Dashboard from "./Container/Dashboard/index";
import UserManagement from "./Container/UserManagement/index";
import CustomerManagement from "./Container/CustomerManagement/index";
import ProductManagement from "./Container/ProductManagement/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/user" element={<UserManagement/>}/>
        <Route path="/customers" element={<CustomerManagement/>}/>
        <Route path="/product" element={<ProductManagement/>}/>
      </Route>
    </Routes>

  );
}

export default App;
