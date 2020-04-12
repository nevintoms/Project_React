import React from "react"
import "./style.css"

const Header = (props) => {
    return (
        <div className="header">
            <header className="headerMenu">
                <nav className="list">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>
            <div>
                social media
            </div>
        </div>
        
    );
}
export default Header;