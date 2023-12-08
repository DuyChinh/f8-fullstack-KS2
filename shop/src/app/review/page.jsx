"use client"
import "./review.css"
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Review() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4eg9gbp",
        "template_gp1shvc",
        e.target,
        "0PHh84RgUESTGyR9Z"
      )
      .then(
        (result) => {
          console.log(result);
          console.log("sent");
          toast.success(
            `Cảm ơn bạn đã đặt lịch! Chúng tôi sẽ liên hệ lại sớm!`
          );
        },
        (error) => {
          console.log(error);
          toast.error(`Send fail!`);
        }
      );
  };
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
          <form onSubmit={sendEmail}>
            <div className="inputBox">
              <textarea
                placeholder="viết đánh giá của bạn"
                name="message"
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