import "./services.css"
import {
  FaBed,
  FaUtensils,
  FaBullhorn,
  FaGlobeAsia,
  FaPlaneDeparture,
  FaHiking,
} from "react-icons/fa";
function Services() {
  return (
    <div className="services" id="services">
      <h1 className="heading">
        <span>D</span>
        <span>Ị</span>
        <span>C</span>
        <span>H</span>
        <span class="space"></span>
        <span>V</span>
        <span>Ụ</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <i>
            <FaBed />
          </i>
          <h3>nghỉ dưỡng cao cấp</h3>
          <p>Some text...</p>
        </div>
        <div className="box">
          <i>
            <FaUtensils />
          </i>
          <h3>Dịch vụ ăn uống</h3>
          <p>Some text...</p>
        </div>
        <div className="box">
          <i>
            <FaBullhorn />
          </i>
          <h3>chính sách an toàn</h3>
          <p>Some text...</p>
        </div>
        <div className="box">
          <i>
            <FaGlobeAsia />
          </i>
          <h3>rộng khắp thế giới</h3>
          <p>Some text...</p>
        </div>
        <div className="box">
          <i>
            <FaPlaneDeparture />
          </i>
          <h3>tốc độ cao</h3>
          <p>Some text...</p>
        </div>
        <div className="box">
          <i>
            <FaHiking />
          </i>
          <h3>Những cuộc phiêu lưu</h3>
          <p>Some text...</p>
        </div>
      </div>
    </div>
  );
}

export default Services