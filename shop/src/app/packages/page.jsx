import "./packages.css"
const Packages =()=> {
  return (
    <section id="packages">
      <h1 className="heading">
        <span>Ư</span>
        <span>U</span>
        <span class="space"></span>
        <span>Đ</span>
        <span>Ã</span>
        <span>I</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="images/p-1.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> mumbai
            </h3>
            <p>Mumbai-Thành phố của nơi giao thoa giữa quá khứ-hiện tại</p>
            <p>chuyến đi dành cho gia đình 3N/2Đ</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              30.000.000 <span>52.845.245</span>
            </div>
            <a href="mumbai/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-2.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> hawaii
            </h3>
            <p>
              hawaii-hòn đảo muôn màu và thiên đường của người chơi lướt ván
            </p>
            <p>chuyến đi dành cho gia đình 5N/6Đ</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              50.000.000 <span>65.124.756</span>
            </div>
            <a href="hawaii/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-3.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> sydney
            </h3>
            <p>Sydney-xứ sở chuột túi và nhà hát SYDNEY OPERA HOUSE</p>
            <p>chuyến đi dành cho gia đình 2N/3Đ</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              35.000.000 <span>43.354.657</span>
            </div>
            <a href="sydney/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-4.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> paris
            </h3>
            <p>Paris-Kinh đô thời trang và thành phố về đêm</p>
            <p>chuyến đi dành cho gia đình 5N/6Đ</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              70.000.000 <span>83.534.978</span>
            </div>
            <a href="paris/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-5.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> tokyo
            </h3>
            <p>
              tokyo-thủ đô có sư giao thoa hài hoà giữa truyền thống và hiện đại
            </p>
            <p>Chuyến đi tự túc cho 1 người/7Ngày</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              6.500.000 <span>10.000.000</span>
            </div>
            <a href="tokyo/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-6.jpg" alt="img" />
          <div className="content">
            <h3>
              <i className="fas fa-map-marker-alt" /> Egypt
            </h3>
            <p>Egypt-vùng đất của Pharaohs và kỳ quan thế giới cổ đại</p>
            <p>chuyến đi dành cho đoàn 7-10 người/7Ngày</p>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <div className="price">
              48.000.000 <span>54.346.456</span>
            </div>
            <a href="egypt/index.html" className="btn">
              Đặt ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages