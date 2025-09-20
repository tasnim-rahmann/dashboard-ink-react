import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../layout/DashboardLayout";
import Menu from "../components/dashboard/Menu";
import Dashboard from "../components/dashboard/Dashboadr";

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="menu" element={<Menu />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;