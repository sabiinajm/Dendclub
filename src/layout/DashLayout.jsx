import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboards/components/Sidebar";
import DashHeader from "../components/header/DashHeader";

function DashLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <DashHeader />
                <Outlet />
            </div>
        </div>
    )
}
export default DashLayout