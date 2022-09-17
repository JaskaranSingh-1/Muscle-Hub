import React from "react";
import RecatDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = RecatDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
);

