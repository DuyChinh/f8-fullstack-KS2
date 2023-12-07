import "./review.css"

function Review() {
  return (
    <div className="review" id="review">
      <h1 className="heading">
        <span>Đ</span>
        <span>Á</span>
        <span>N</span>
        <span>H</span>
        <span class="space"></span>
        <span>G</span>
        <span>I</span>
        <span>Á</span>
      </h1>

      <div className="rate">
        <div className="row">
          <div className="ratestar">
            <h2>đánh giá chuyến đi của bạn</h2>
            <div className="skills">
              {/* <div className="rating">
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
                <input type="radio" name="star" />
              </div> */}
            </div>
          </div>
          <form>
            <div className="inputBox">
              <textarea
                placeholder="viết đánh giá của bạn"
                name="rate"
                cols={30}
                rows={15}
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              className="btn"
              defaultValue="gửi tới chúng tôi"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review