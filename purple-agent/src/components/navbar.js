import Head from "next/head";
import NextLink from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const [isIndex, setIsIndex] = useState(router.pathname === "/");
  const [sidebar, setSideBar] = useState(false);

  const goToContent = () => {
    document
      .getElementById("pressTablet")
      .scrollIntoView({ behavior: "smooth", block: "center" });
    document
      .getElementById("pressDesktop")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="hidden md:flex justify-center w-screen bg-black font-semibold tracking-widest text-xl text-white gap-x-16 py-10 ">
        <NextLink href="/kimiz">
          <p>KİMİZ BİZ</p>
        </NextLink>
        <NextLink href={"/"} className={`${isIndex ? "hidden" : ""}`}>
          <p>NE YAPIYORUZ</p>
        </NextLink>
        <p
          onClick={goToContent}
          className={`${isIndex ? "" : "hidden"} cursor-pointer`}
        >
          NE YAPIYORUZ
        </p>
        <NextLink href="/iletisim">
          <p>BİZE ULAŞIN</p>
        </NextLink>
      </nav>
      <div
        className={`${
          sidebar ? "absolute mobileSidebar" : " -translate-x-[100vw]"
        }  gap-y-5 flex flex-col bg-white absolute h-screen w-[75vw] overflow-y-hidden z-50 p-5 transition-all duration-300`}
      >
        <button onClick={() => setSideBar(!sidebar)}>
          <XMarkIcon className="w-10" />
        </button>
        <NextLink href="/">
          <button className="text-black font-semibold text-2xl">
            Ne Yapıyoruz
          </button>
        </NextLink>
        <NextLink href="/iletisim">
          <button className="text-black font-semibold text-2xl">
            Bize Ulaşın
          </button>
        </NextLink>
        <NextLink href="/kimiz">
          <button className="text-black font-semibold text-2xl">
            Kimiz Biz
          </button>
        </NextLink>
      </div>
      <nav className="md:hidden bg-white flex flex-row-reverse justify-between w-screen p-4 overflow-y-hidden">
        <NextLink href="/">
          <Image src="/newLogo.jpg" height={300} width={100} />
        </NextLink>
        <button onClick={() => setSideBar(!sidebar)}>
          <Bars3Icon className="w-12 stroke-agent-orange" />
        </button>
      </nav>
    </>
  );
}
