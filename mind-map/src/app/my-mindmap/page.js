// import Header from "~/components/Header";
// import Footer from "~/components/Footer";
import Header from "../(client)/home/Header/Header";
import Footer from "../(client)/home/Footer/Footer";
import MyMindmap from "./MyMindmap.js";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Mindmap - Collaborative Mind Mapping | Mindmap",
  description: "The Ultimate Toolkit for Bringing Ideas to Life",
  openGraph: {
    title: "Mindmap - Collaborative Mind Mapping | Mindmap",
    description: "The Ultimate Toolkit for Bringing Ideas to Life",
  },
};
async function MindMap() {
  const data = await getSession();
  const user = data?.user;
  if (!user) {
    redirect("/api/auth/login");
  }
  return (
    <>
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
                className="py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
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
                  className="p-2 py-4 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
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
  {/* Header */}
      <div className="px-[30px] pb-[100px] pt-[120px]">
        <h2 className="heading-1 !text-4xl">List mindmap</h2>
        <MyMindmap user={user} />
      </div>
      <Footer />
    </>
  );
}

export default MindMap;
