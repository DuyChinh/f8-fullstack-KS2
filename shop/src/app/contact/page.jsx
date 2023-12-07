import "./contact.css"

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="heading">
        <span>L</span>
        <span>I</span>
        <span>Ê</span>
        <span>N</span>
        <span class="space"></span>
        <span>H</span>
        <span>Ệ</span>
      </h1>

      <div className="row">
        <div className="image">
          <iframe
            width="100%"
            height="350vh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650976801748!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <form action>
          <div className="inputBox">
            <input type="text" placeholder="Tên của bạn" />
            <input type="email" placeholder="Email liên hệ" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="Số điện thoại" />
            <input type="text" placeholder="Chủ đề" />
          </div>
          <textarea
            placeholder="Viết lời nhắn của bạn"
            name
            id
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input
            type="submit"
            className="btn"
            name="send"
            defaultValue="Gửi tới chúng tôi"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact
