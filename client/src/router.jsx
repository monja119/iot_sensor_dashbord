import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardJson from "./pages/DashboardJson.jsx";

function Router()
{

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Dashboard />} />
                <Route path={'/json'} element={<DashboardJson />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router