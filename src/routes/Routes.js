import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import FishingSpots from "../pages/FishingSpots";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/dashboard"
                element={<PrivateRoute element={Dashboard} />}
            />
            <Route
                path="/fishing-spots"
                element={<PrivateRoute element={FishingSpots} />}
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </Router>
);

export default AppRoutes;
