import React from "react";
import "../style/Header.css";
import logo from "../image/tiki-logo.png";
import account from "../image/Tài Khoản.png";
import home from "../image/Trang chủ.png";
import cart from "../image/cart_logo.png"
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="search-area">
                <div className="search">
                    <div className="search__icon">
                        <i class="bi bi-search"></i>
                    </div>
                    <input className="place-holder" type="text" placeholder=" Giao hàng 2H và đúng khung giờ" />
                    <div className="line"></div>
                    <button className="find-btn">Tìm Kiếm</button>
                </div>
                <ul className="categories">
                    <li>nhà cửa</li>
                    <li>sách</li>
                    <li>bách hóa</li>
                    <li>trái cây</li>
                    <li>thịt, trứng</li>
                    <li>rau củ quả</li>
                    <li>sữa, bơ, phô mai</li>
                    <li>hải sản</li>
                    <li>gạo, mì ăn liền</li>
                </ul>
            </div>
            <div className="header-button home-btn ">
                <div className="logo">
                    <img src={home}></img>
                </div>
                <div className="btn-name">Trang chủ</div>
            </div>
            <div className="header-button account-btn">
                <div className="logo">
                    <img src={account}></img>
                    <div className="btn-name">Trang chủ</div>
                </div>
            </div>
            <div className="header-button cart">
                <div className="logo">
                    <img src={cart}></img>
                </div>
            </div>
        </header>
    );
};

export default Header;
