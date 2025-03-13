import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboards/components/Sidebar";
import DashHeader from "../components/header/DashHeader";
import { useState } from "react";

function DashLayout() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="lg:flex">
            <div className="lg:hidden">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="hidden lg:flex">
                {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
            <div className="lg:flex-1">
                <DashHeader setIsOpen={setIsOpen} isOpen={isOpen} />
                <Outlet />
            </div>
        </div>
    )
}
export default DashLayout