import { Link } from "react-router";

const SideBar = () => {
    return (
        <div className="h-screen bg-gray-300 p-6">
            <h1 className="text-xl font-medium mb-2">This is Side Bar</h1>
            <ul className="space-y-1">
                <Link to="/dashboard"><li className="hover:underline">Home</li></Link>
                <Link to="/dashboard/menu"><li className="hover:underline">Menu</li></Link>
                <li className="hover:underline">Files</li>
            </ul>
        </div >
    );
};

export default SideBar;