import React from "react";
import Header from "./Header";
import "../style/Layout.css";

function Layout({ children }) {
    return (
        <div className="Layout">
            <Header />
            <span className="child">{children}</span>
        </div>
    );
}

export default Layout;