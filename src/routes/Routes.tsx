import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomeView, UserView } from "@views/index";

export const RoutesNav = () => {
    return (
        <Router>
            <>
                <nav className="shadow-sm w-full bg-white">
                    <div className="flex items-center justify-between py-4 max-w-screen-lg m-auto">
                        <Link to="/">Agrak Challenge</Link>

                        <ul className="flex items-center space-x-3">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="bg-blue-500 text-white rounded-sm px-4 py-2 shadow-sm">
                                <Link to="/user">Create user</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/user/:id" element={<UserView />} />
                    <Route path="/user" element={<UserView />} />
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </>
        </Router>
    );
};
