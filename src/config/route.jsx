import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "../pages/home";
import Admin from "../pages/admin";
import AdminDashboard from "../pages/adminDashboard";
import AdminPanel from "../pages/adminPanel";
import Dashboard from "../pages/dashboard";
import DashboardUi from "../pages/dashboardUi";
import FoodDelivery from "../pages/foodDelivery";
import FreeDesign from "../pages/freeDesign";
import FreeTemplates from "../pages/freeTemplates";
import Navbar from "../components/navbar";
export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="admin"  element={<Admin/>} />
        <Route path="adminDashboard"  element={<AdminDashboard/>} />
        <Route path="adminPanel"  element={<AdminPanel/>} />
        <Route path="dashboard/*"  element={<Dashboard/>} />
        <Route path="dashboardUi"  element={<DashboardUi/>} />
        <Route path="foodDelivery"  element={<FoodDelivery/>} />
        <Route path="freeDesign"  element={<FreeDesign/>} />
        <Route path="freeTemplates"  element={<FreeTemplates/>} />
    </Routes>
    </BrowserRouter>
    
    </>
}