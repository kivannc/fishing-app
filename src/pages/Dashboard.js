import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => (
    <div>
        <Navbar />
        <div className="d-flex">
            <Sidebar />
            <div className="p-4 flex-grow-1">
                <h2>Dashboard</h2>
                <p>Welcome to the admin dashboard.</p>
            </div>
        </div>
    </div>
);

export default Dashboard;
