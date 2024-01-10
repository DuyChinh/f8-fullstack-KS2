'use client'
import "./Header.css"
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
// import Loading from "@/app/components/Loading/Loading";
function Header() {
  const { user, error, isLoading } = useUser();
  // if (isLoading) return <Loading/>
  // console.log(user);
  return (
    <div className="header-2">
      <nav className="bg-white py-2 md:py-6">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-4xl text-indigo-600">
              MindMap Flow
            </Link>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Link
              href="/"
              className="p-2 py-4 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Giới thiệu
            </Link>
            <Link
              href="/features"
              className="item py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Tính năng
            </Link>
            <Link
              href="/price"
              className="py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Bảng giá
            </Link>
            <Link
              href="/contact"
              className="py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Liên hệ
            </Link>
            {user && (
              <p className="py-4 px-12 lg:px-4 md:mx-2 text-indigo-600 text-center border-indigo-600 rounded  hover:bg-yellow-200 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                Hi, {user.name ? user.name : user.nickname}
              </p>
            )}
            {!user && (
              <Link
                href="/api/auth/login"
                className="py-4 px-12 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Đăng nhập
              </Link>
            )}
            {user && (
              <a
                href="/my-mindmap"
                className="py-4 px-12 lg:px-4 md:mx-2 text-indigo-600 text-center border-indigo-600 rounded hover:bg-indigo-400 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Mindmap
              </a>
            )}
            {!user && (
              <Link
                href="/api/auth/login"
                className="py-4 px-12 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Đăng kí
              </Link>
            )}
            {user && (
              <a
                href="/api/auth/logout"
                className="py-4 px-12 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Đăng xuất
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header