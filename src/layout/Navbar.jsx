import { Link } from "react-router";

const Navbar = () => {
    return (
        <div>
            <ul className="flex items-center justify-center gap-2">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;