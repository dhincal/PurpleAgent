import NextLink from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Play, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black hidden xl:flex py-6">
        <div className="flex justify-center items-center w-1/3">
          <div>
            <Image src="/newLogoWhite.png" height={125} width={250} />
          </div>
        </div>
        <div className="font-semibold px-20 py-5 flex flex-col text-lg border-x-2 border-white text-left text-white justify-center w-5/12">
          <p className="">cigdem@purplebasim.com</p>
          <p className="mb-5">0535 689 42 82</p>
          <p className="">
            Maltepe Mah. Litros Yolu Sk. Matbaacılar Sitesi ZC5
          </p>
          <p className="">Zeytinburnu/İstanbul</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-5 items-center w-1/3">
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
            <Image src="/newLogoWhite.png" height={100} width={200} />
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
