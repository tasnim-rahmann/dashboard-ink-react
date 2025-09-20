import { Outlet } from "react-router";
import SideBar from "../components/dashboard/SideBar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = () => {
    return (
        <div className="bg-red-200">
            <Navbar />
            <div className="flex">
                <div className="flex-1/8">
                    <SideBar />
                </div>
                <div className="flex-7/8 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;