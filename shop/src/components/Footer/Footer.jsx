import Link from "next/link";
import "./Footer.css"
function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <Link href="#" className="logo">
            <h3>
              <span>S</span>travel
            </h3>
          </Link>
          <p>
            Trải qua 17 năm phát triển bền vững, STravel đã ghi dấu ấn của mình
            với thông điệp <br />
            “Nâng tầm trải nghiệm từng chuyến đi”
          </p>
        </div>
        <div className="box">
          <h3>Chi nhánh chính</h3>
          <a href="#">Hà nội</a>
          <a href="#">Ấn độ</a>
          <a href="#">Mỹ</a>
          <a href="#">Nhật Bản</a>
          <a href="#">Pháp</a>
        </div>
        <div className="box">
          <h3>chuyển hướng</h3>
          <Link href="#home">Trang Chủ</Link>
          <Link href="#book">Đặt lịch</Link>
          <Link href="#pLinkckLinkges">Ưu Đãi</Link>
          <Link href="#services">Dịch Vụ</Link>
          <Link href="#gLinkllery">Thư Viện</Link>
          <Link href="#review">Đánh giá</Link>
          <Link href="#contact">Liên Hệ</Link>
        </div>
        <div className="box">
          <h3>Tương tác</h3>
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">twitter</a>
          <a href="#">linkedin</a>
        </div>
      </div>
      <h1 className="credit">
        created by <span> STRAVEL </span> | all rights reserved!
      </h1>
    </section>
  );
}

export default Footer