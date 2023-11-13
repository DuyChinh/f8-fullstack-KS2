import { useAuth0 } from "@auth0/auth0-react"
// import { useState } from "react";
import Loading from "../Loading/Loading";
import SignOut from "../SignOut/SignOut"
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const serviceId = import.meta.env.VITE_ID_SERVICE_EMAILJS;
const temId = import.meta.env.VITE_ID_TEMPLATE_EMAILJS;
const apiKeys = import.meta.env.VITE_KEY_EMAILJS;

const User = ()=> {
    const {isLoading, user, isAuthenticated} = useAuth0();
    // const {loading, setLoading} = useState(false);
    const postEmail = (e) => {
      e.preventDefault();
      // setLoading(true);

      emailjs.sendForm(
        serviceId,
        temId,
        e.target,
        apiKeys
      )
      .then(
        (response) => {
          console.log(response);
          toast.success(`Send success`)
        },
        (error) => {
          console.log(error);
          toast.error(`Send fail!`);
        }
      )
      
    }
    return (
      <>
        {isAuthenticated && (
          <div className="container">
            <div className="user-info">
              <img src={user.picture} alt={user.name} className="avatar" />
              <h2>Hello: {user.name}</h2>
              {user.email && (
                <p>
                  Email: <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              )}
            </div>

            <form action="" className="form-response" onSubmit={postEmail}>
              <label htmlFor="email">Email của bạn* </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Nhập email của bạn"
                defaultValue={user.email}
              />
              <label htmlFor="message">Tin nhắn </label>
              <textarea
                type="text"
                name="message"
                id="message"
                required
                placeholder="Nhập tin nhắn của bạn"
                defaultValue="Tôi cần trợ giúp bài tập về nhà!"
                cols="40"
                rows="10"
              ></textarea>
              <button type="submit" className="btn">Yêu cầu hỗ trợ</button>
            </form>
            <SignOut/>
            {(isLoading) && <Loading/>}
          </div>
        )}
      </>
    );
}




export default User;
