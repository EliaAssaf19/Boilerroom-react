import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Reseplaneren</div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Hem</a></li>
                    <li><a href="/om">Om</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;