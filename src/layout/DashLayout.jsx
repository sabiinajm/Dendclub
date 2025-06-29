import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboards/components/Sidebar";
import DashHeader from "../components/header/DashHeader";
import { useState } from "react";

function DashLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation()

    const decodedPath = decodeURIComponent(location.pathname);
    const firstSegment = decodedPath.split('/')[1] || "";

    const role = firstSegment.includes("Aptek")
        ? "Aptek"
        : firstSegment.includes("Həkim")
            ? "Həkim"
            : firstSegment.includes("Klinika")
                ? "Klinika"
                : "Ümumi-Admin-Panel";

    console.log(role);

    return (
        <div className="lg:flex">
            <div className="lg:hidden">
                <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="hidden lg:flex">
                {isOpen && <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
            <div className="lg:flex-1">
                <DashHeader setIsOpen={setIsOpen} isOpen={isOpen} />
                <Outlet />
            </div>
        </div>
    )
}
export default DashLayout