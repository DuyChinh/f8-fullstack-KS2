import "./Navbar.css"
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Router } from "next/navigation";
const Navbar = ()=> {
  return (
    <div className="navbar">
      <Link href="#home">
        <img
          src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?w=2000"
          alt=""
          className="logo"
        />
      </Link>
      <ul className="subnav">
        <li>
          <Link href="#home">Trang chủ</Link>
        </li>
        <li>
          <Link href="#book">Đặt lịch</Link>
        </li>
        <li>
          <Link href="#packages">Ưu đãi</Link>
        </li>
        <li>
          <Link href="#services">Dịch vụ</Link>
        </li>
        <li>
          <Link href="#gallery">Thư viện</Link>
        </li>
        <li>
          <Link href="#review">Đánh giá</Link>
        </li>
        <li>
          <Link href="#contact">Liên hệ</Link>
        </li>
      </ul>

      <div className="nav-action">
        <FaSearch />
        <IoPersonSharp />
      </div>
    </div>
  );
}

export default Navbar