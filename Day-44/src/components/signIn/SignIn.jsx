import  Loading  from "../Loading/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import "./SignIn.css"

const SignIn = () => {
    const { isLoading, loginWithPopup, isAuthenticated } = useAuth0();
    return (
      <>
        {!isAuthenticated && (
          <div className="container">
            <p>Cảm ơn đã sử dụng dịch vụ của chúng tôi</p>
            <p>
              Nếu có bất kì câu hỏi nào, hãy <b>đăng nhập</b> và gửi cho chúng
              tôi
            </p>
            <button onClick={() => loginWithPopup({})}>
              Đăng nhập || Đăng kí
            </button>
          </div>
        )}
        {isLoading && <Loading />}
      </>
    );
}

export default SignIn