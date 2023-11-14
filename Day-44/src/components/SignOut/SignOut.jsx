import { useAuth0 } from "@auth0/auth0-react"
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const SignOut = ()=> {
    const { isLoading, logout, isAuthenticated }  = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <button
          onClick={() => {
            toast.success("Log out");
            logout({
              logoutParams: { returnTo: window.location.origin },
            });
          }}
        >
          Đăng xuất
        </button>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default SignOut