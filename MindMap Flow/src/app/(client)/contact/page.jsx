import Link from "next/link";
import Footer from "../home/Footer/Footer";
import { getSession } from '@auth0/nextjs-auth0';
export default async function Page() {
  const user  = await getSession();
  // console.log(user);
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
                className="p-2 py-4 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
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
                  href="/api/auth/logout"
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

      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <p className="my-10 text-4xl leading-7 text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-7xl sm:text-7xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
        </div>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-red-500 text-xl italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                defaultValue={"        \n      "}
              />
            </div>
            <div className="flex justify-between w-full px-3 mt-10">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-xl">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Credit: Componentity.com
        <a href="https://componentity.com" target="_blank" className="block">
          <img
            src="http://codenawis.com/componentity/wp-content/uploads/2020/08/logo-componentity-%E2%80%93-9.png"
            className="w-48 mx-auto my-5"
          />
        </a> */}

      <Footer />
    </>
  );
}

