import Link from "next/link";
import Footer from "../home/Footer/Footer";
// import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
async function Page() {
  // const { user, error, isLoading } = useUser();
  const user = await getSession();
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
                className="item py-4 px-12 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Giới thiệu
              </Link>
              <Link
                href="/features"
                className="p-2 py-4 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
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
      <div class="feature-1 py-6 md:py-12">
        <div class="container px-4 mx-auto">
          <div class="flex -mx-4">
            <div class="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
              <h1 class="mb-8 text-7xl font-medium">Features</h1>
              <p class="mb-4 text-3xl leading-10">
                The main aim of creating FWR blocks is to help designers,
                developers and agencies create websites and web apps quickly and
                easily. Each and every block uses minimal custom styling and is
                based on the utility first Tailwind framework.
              </p>
              <button class="border-2 border-solid border-indigo-600 rounded py-6 px-12 text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div class="md:flex md:-mx-4 mt-12 md:pt-4">
            <div class="px-4 md:w-1/3 mt-6 md:mt-0">
              <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                <div class="text-xl p-4 w-16 h-16 mx-auto">
                  <i class="fas fa-bolt text-indigo-600"></i>
                </div>
                <h5 class="text-xl font-medium mb-4">Fresh Design</h5>
                <p class="text-gray-600 mb-3">
                  FWR blocks bring in an air of fresh design with their creative
                  layouts and blocks, which are easily customizable.
                </p>
              </div>
            </div>
            <div class="px-4 md:w-1/3 mt-6 md:mt-0">
              <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                <div class="text-xl p-4 w-16 h-16 mx-auto">
                  <i class="fas fa-code text-indigo-600"></i>
                </div>
                <h5 class="text-xl font-medium mb-4">Clean Code</h5>
                <p class="text-gray-600 mb-3">
                  FWR blocks are the cleanest pieces of HTML blocks, which are
                  built with utmost care to quality and usability.
                </p>
              </div>
            </div>
            <div class="px-4 md:w-1/3 mt-6 md:mt-0">
              <div class="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                <div class="text-xl p-4 w-16 h-16 mx-auto">
                  <i class="fas fa-wrench text-indigo-600"></i>
                </div>
                <h5 class="text-xl font-medium mb-4">Perfect Tool</h5>
                <p class="text-gray-600 mb-3">
                  FWR blocks is a perfect tool for designers, developers and
                  agencies looking to create stunning websites in no time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page 