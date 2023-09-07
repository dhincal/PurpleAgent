import NextLink from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Play, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black hidden xl:flex py-12">
        <div className="flex justify-center items-center w-1/3">
          <div>
            <Image src="/newLogoWhite.png" height={125} width={400} />
          </div>
        </div>
        <div className="px-20 py-5 flex flex-col border-x-2 border-white text-left text-white justify-center">
          <p className="text-2xl font-bold">cigdem@purplebasim.com</p>
          <p className="text-2xl font-bold mb-5">0535 689 42 82</p>
          <p className="text-2xl font-bold">
            Maltepe Mah. Litros Yolu Sk. Matbaacılar Sitesi ZC5
          </p>
          <p className="text-2xl font-bold">Zeytinburnu/İstanbul</p>
        </div>

        <div className="grid xl:grid-cols-4 grid-cols-2 justify-center gap-x-3 px-10 items-center self-stretch w-1/4">
          <div className="bg-white rounded-full h-fit w-fit p-2">
            <Facebook size={36} className="fill-black" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2">
            <Instagram size={36} className="" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2">
            <Linkedin size={36} className="fill-black" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2">
            <Play size={36} className="fill-black ml-0.5" color="black" />
          </div>
        </div>
      </footer>
      <footer className="bg-black hidden md:flex xl:hidden py-6">
        <div className="flex justify-center w-1/3 items-center">
          <div>
            <Image src="/newLogoWhite.png" height={100} width={250} />
          </div>
        </div>
        <div className="flex flex-col border-x-2 text-white border-white text-left justify-center items-center w-2/5">
          <p className="text-lg font-medium w-4/5">info@purpleajans.com.tr</p>
          <p className="text-lg font-medium w-4/5 mb-2">0535 689 42 82</p>
          <p className="text-lg font-medium w-4/5">
            Maltepe Mah. Litros Yolu Sk. Matbaacılar Sitesi ZC5
          </p>
          <p className="text-lg font-medium w-4/5">Zeytinburnu/İstanbul</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-2 place-content-center px-10 items-center self-stretch w-1/4">
          <div className="bg-white rounded-full h-fit w-fit p-2 mx-auto">
            <Facebook size={30} className="fill-black" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2 mx-auto">
            <Instagram size={30} className="" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2 mx-auto">
            <Linkedin size={30} className="fill-black" color="black" />
          </div>
          <div className="bg-white rounded-full h-fit w-fit p-2 mx-auto">
            <Play size={30} className="fill-black ml-0.5" color="black" />
          </div>
        </div>
      </footer>
    </>
  );
}
