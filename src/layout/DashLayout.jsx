import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboards/components/Sidebar";
import DashHeader from "../components/header/DashHeader";
import { useState } from "react";

function DashLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation()
    
    const role = location.pathname.includes("Aptek") ? "Aptek" : location.pathname.includes("Klinika") ? "Klinika"  :  "Həkim";
    console.log(role)

    return (
        <div className="lg:flex">
            <div className="lg:hidden">
                <Sidebar   role={role}  isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="hidden lg:flex">
                {isOpen && <Sidebar  role={role}  isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
            <div className="lg:flex-1">
                <DashHeader setIsOpen={setIsOpen} isOpen={isOpen} />
                <Outlet />
            </div>
        </div>
    )
}
export default DashLayout