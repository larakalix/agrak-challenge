import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomeView } from "../components/views/home/HomeView";
import { UserView } from "../components/views/user/UserView";

export const RoutesNav = () => {
    return (
        <Router>
            <>
                <nav className="shadow-sm w-full">
                    <div className="flex items-center justify-between px-6 py-4 max-w-screen-lg m-auto">
                        <div>Agrak Challenge</div>

                        <ul className="flex items-center space-x-3">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/user">User</Link>
                            </li>
                            <li className="bg-blue-500 text-white rounded-sm px-4 py-2 shadow-sm">
                                <Link to="/user">Create user</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/user" element={<UserView />} />
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </>
        </Router>
    );
};
