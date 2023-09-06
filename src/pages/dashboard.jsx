import { NavLink, Routes,Route } from "react-router-dom"
import DashboardCom from "../components/dashboardCom"
export default function Dashboard(){
    return <>
    <h1 className="h1">Dashboard Page</h1>
    <NavLink to={'/dashboardCom'} >Nested Dashboard</NavLink>
    <Routes>
        <Route path = '/dashboardCom' element = {<DashboardCom/>} />
    </Routes>


    </>
}
