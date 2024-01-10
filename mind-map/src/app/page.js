'use client'
import Header from "./(client)/home/Header/Header"
import Footer from "./(client)/home/Footer/Footer";
import Hero from "./(client)/home/Header/Hero";
import { useUser } from "@auth0/nextjs-auth0/client";
// import { getSession } from "@auth0/nextjs-auth0";
import Loading from "./components/Loading/Loading";
function Page() {
   const { user, error, isLoading } = useUser();
  if (isLoading) return <Loading/>;
  
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  );
}

export default Page

