import React from "react";
import "../style/Footer.css"

function renderLinks(links) {
    return (
        <div>
            {links.map((link) => (
                <li key={link.key}>
                    <a href="#">{link.textContent}</a>
                </li>
            ))}
        </div>
    );
}
const support_links = [
    { key: 1, textContent: "Các câu hỏi thường gặp" },
    { key: 2, textContent: "Gửi yêu cầu hỗ trợ" },
    { key: 3, textContent: "Hướng dẫn đặt hàng" },
    { key: 4, textContent: "Phương thức vận chuyển" },
    { key: 5, textContent: "Chính sách đổi trả" },
    { key: 6, textContent: "Hướng dẫn trả góp" },
    { key: 7, textContent: "Chính sách hàng nhập khẩu" },
];

const aboutTiki_links = [
    { key: 0, textContent: "Giới thiệu Tiki" },
    { key: 1, textContent: "Tiki Blog" },
    { key: 2, textContent: "Tuyển dụng" },
    { key: 3, textContent: "Chính sách bảo mật thanh toán" },
    { key: 4, textContent: "Chính sách bảo mật thông tin cá nhân" },
    { key: 5, textContent: "Chính sách giải quyết khiếu nại" },
    { key: 6, textContent: "Điều khoản sử dụng" },
    { key: 7, textContent: "Giới thiệu Tiki Xu" },
    { key: 8, textContent: "Thưởng thêm Astra" },
    { key: 9, textContent: "Gói hội viên VIP" },
    { key: 10, textContent: "Tiếp thị liên kết cùng Tiki" },
    { key: 11, textContent: "Bán hàng doanh nghiệp" },
    { key: 12, textContent: "Điều kiện vận chuyển" },
]

const coop_links = [
    { key: 1, textContent: "Quy chế hoạt động Sàn GDTMĐT" },
    { key: 2, textContent: "Bán hàng cùng Tiki" }
]
function Footer() {

    return (
        <div className="footer">
            <div className="informations">
                <div className="information">
                    {/* Hỗ trợ khách hàng */}
                    <div className="info">
                        <div className="info-header">
                            <h3>Hỗ trợ khách hàng</h3>
                            <p>Hotline: 1900-6035</p>
                            <p>(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                        </div>
                        <div className="links">
                            {renderLinks(support_links)}
                        </div>
                        <div className="contacts">
                            <p>Hỗ trợ khách hàng: hotro@tiki.vn</p>
                            <p>Báo lỗi bảo mật: security@tiki.vn</p>
                        </div>
                    </div>
                    {/* end Hỗ trợ khách hàng */}

                    {/* About Tiki */}
                    <div className="info">
                        <div className="info-header">
                            <h3>Về Tiki</h3>
                        </div>
                        <div className="links">
                            {renderLinks(aboutTiki_links)}
                        </div>
                    </div>
                    {/* end About Tiki */}

                    {/* Hợp tác */}
                    <div className="info">
                        <div className="info-header">
                            <h3>Hợp tác và liên kết</h3>
                        </div>
                        <div className="links">
                            {renderLinks(coop_links)}
                        </div>
                        <p>Chứng nhận bởi</p>
                        <div className="image-list">
                            <img className="bocongthuong1" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" width={32} height={32}></img>
                            <img className="bocongthuong2" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" height={32} width={83}></img>
                        </div>
                        {/* end Hợp tác */}
                    </div>

                    {/* Phương thức thanh toán */}
                    <div className="info">
                        <div className="info-header">
                            <h3>Phương thức thanh toán</h3>
                        </div>
                        <div className="logo-list">
                            <i class="bi bi-stripe"></i>
                            <i class="bi bi-credit-card-2-front-fill"></i>
                            <i class="bi bi-wallet2"></i>
                        </div>
                    </div>

                    {/* end Phương thức thanh toán */}

                    {/* Liên kết chúng tôi */}
                    <div className="info">
                        <div className="info-header">
                            <h3>Kết nối với chúng tôi</h3>
                        </div>
                        <div className="connect-logo-list">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-youtube"></i>
                        </div>
                        <div className="download-section">
                            <p>Tải ứng dụng trên điện thoại</p>
                        </div>
                        <div className="dowload-logos">
                            <span className="Qr-code">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png" width={80} height={80} ></img>
                            </span>
                            <div className="download-app">
                                <img className="app-store" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" width={122}></img>
                                <img className="google-play" src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" width={122}></img>
                            </div>
                        </div>
                    </div>
                    {/* end Liên kết với chúng tôi */}
                </div>
            </div>
            <div className="separator"></div>
            <div className="addresses">
                <p>Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh<br></br>
                    Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng<br></br>
                    Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 06/01/2010 và sửa đổi lần thứ 23 ngày 14/02/2022<br></br>
                    © 2022 - Bản quyền của Công ty TNHH Ti Ki</p>
            </div>
            <div className="separator"></div>
            <div className="about">
                <div className="about-header">Tiki - Thật nhanh, thật chất lượng, thật rẻ</div>
                <div className="about-content">
                    <div className="content-header"></div>
                    <p>Với hàng triệu sản phẩm từ các thương hiệu, cửa hàng uy tín, hàng nghìn loại mặt hàng từ Điện thoại smartphone tới Rau củ quả tươi, kèm theo dịch vụ giao hàng siêu tốc TikiNOW, Tiki mang đến cho bạn một trải nghiệm mua sắm online bắt đầu bằng chữ tín. Thêm vào đó, ở Tiki bạn có thể dễ dàng sử dụng vô vàn các tiện ích khác như mua thẻ cào, thanh toán hoá đơn điện nước, các dịch vụ bảo hiểm.</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
