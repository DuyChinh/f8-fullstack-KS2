import { useAuth0 } from "@auth0/auth0-react"
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { useState } from "react";

const SignOut = ()=> {
    const { logout, isAuthenticated }  = useAuth0();
    const [loading, setLoading] = useState();
  return (
    <>
      {isAuthenticated && (
        <button
          onClick={() => {
            setLoading(true);
            toast.success("Log outing");
            logout({
              logoutParams: { returnTo: window.location.origin },
            });
          }}
        >
          Đăng xuất
        </button>
      )}
      {loading && <Loading />}
    </>
  );
}

export default SignOut