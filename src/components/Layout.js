import React from "react";
import Header from "./Header";
import "../style/Layout.css";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="Layout">
            <Header />
            <div></div>
            <span className="child">{children}
            </span>
            <Footer />
        </div>
    );
}

export default Layout;