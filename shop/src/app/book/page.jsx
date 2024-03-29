"use client"
import "./book.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Book  = ()=> {
  const sendEmail = (e) => {
    // console.log(e.target.user_email.value);
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
          toast.success(`Cảm ơn bạn đã đặt lịch! Chúng tôi sẽ liên hệ lại sớm!`);
        },
        (error) => {
          console.log(error);
          toast.error(`Send fail!`);
        }
      );
  };

  return (
    <div className="book" id="book">
      <h1 className="heading">
        <span>T</span>
        <span>Ì</span>
        <span>M</span>
        <span class="space"></span>
        <span>Ư</span>
        <span>U</span>
        <span class="space"></span>
        <span>Đ</span>
        <span>Ã</span>
        <span>I</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src="images/book-img.svg" alt="img" />
        </div>
        <form onSubmit={sendEmail}>
          <div className="inputBox">
            <h3>Hãy liên hệ với tôi bằng :</h3>
            <input
              type="email"
              name="email"
              placeholder="Email hoặc số điện thoại"
            />
          </div>
          <div className="inputBox">
            <h3>Tôi muốn đến :</h3>
            <select>
              <option value="American Samoa">American Samoa</option>
              <option value="Angola">Angola</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Denmark">Denmark</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="France">France</option>
              <option value="France Metropolitan">France, Metropolitan</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Greenland">Greenland</option>
              <option value="Guam">Guam</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Holy See">Holy See (Vatican City State)</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran (Islamic Republic of)</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Democratic People's Republic of Korea">
                Korea, Democratic of
              </option>
              <option value="Kuwait">Kuwait</option>
              <option value="Lao">Lao Democratic Republic</option>
              <option value="Liberia">Liberia</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Macau">Macau</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Monaco">Monaco</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Panama">Panama</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint LUCIA">Saint LUCIA</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia (Slovak Republic)</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="South Africa">South Africa</option>
              <option value="Span">Spain</option>
              <option value="SriLanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Syria">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan, Province of China</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam" selected>
                Viet Nam
              </option>
              <option value="Yemen">Yemen</option>
              <option value="Serbia">Serbia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Địa điểm chính xác"
            />
          </div>
          <div className="inputBox">
            <h3>Chúng tôi có :</h3>
            <input type="number" name="number_people" placeholder="Số người" />
          </div>
          <div className="inputBox">
            <h3>bắt đầu từ :</h3>
            <input type="date" name="start_date" />
          </div>
          <div className="inputBox">
            <h3>Kết thúc vào :</h3>
            <input type="date" name="end_date" />
          </div>

          <input type="submit" className="btn" value="Đặt ngay" />
        </form>
        {/* <form  onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </div>
    </div>
  );
}

export default Book