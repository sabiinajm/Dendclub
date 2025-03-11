import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboards/components/Sidebar";
import DashHeader from "../components/header/DashHeader";
import { useState } from "react";

function DashLayout() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(null);
    return (
        <div className="lg:flex">
            <div className="lg:hidden">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex} activeIndex2={activeIndex2} setActiveIndex2={setActiveIndex2} />
            </div>
            <div className="hidden lg:flex">
                {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex} activeIndex2={activeIndex2} setActiveIndex2={setActiveIndex2} />}
            </div>
            <div className="lg:flex-1">
                <DashHeader setIsOpen={setIsOpen} isOpen={isOpen} />
                <Outlet context={{ activeIndex, activeIndex2 }} />
            </div>
        </div>
    )
}
export default DashLayout