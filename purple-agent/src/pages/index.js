import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import flameurl from "../../public/flame.jpg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Basım</title>
        <meta name="description" content="Purple Agent" />
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
      <mobile className="md:hidden">
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="relative flex w-screen">
            <Image src={"/slider1.jpg"} height={1920} width={1080} />
          </div>
          <div
            id="pressPhone"
            className="flex justify-evenly gap-y-10 mt-14 flex-wrap"
          >
            <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
              <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
                <Image src="/design.png" className="object-cover z-40" fill />
              </div>
              <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
                TASARIM
              </h3>
              <p className="text-center leading-5">
                Biliyoruz!
                <br />
                Bütün işler acildir.
                <br />
                Bütün işler daima en iyi tasarımı hakeder.
                <br />
                İçeriklerinizin kurumsal kimliğinize en uygun şekilde,
                <br />
                en hızlı ve en eşsiz tasarımları için
                <br />
                PURPLE BASIM BURADA
              </p>
              <NextLink href="/tasarim" className="w-full flex justify-center">
                <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                  İNCELEYİN
                </button>
              </NextLink>
            </div>
            <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
              <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
                <Image src="/press.png" className="object-cover z-40" fill />
              </div>
              <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
                BASKI
              </h3>
              <p className="text-center leading-5">
                Biliyoruz!
                <br />
                Bütün işler acildir.
                <br />
                Bütün işler daima en iyi baskıyı hakeder.
                <br />
                Kataloglarınız, ambalajlarınız ya da kartvizitinizin
                <br />
                en hızlı ve en ekonomik baskıları için
                <br />
                PURPLE BASIM BURADA
              </p>
              <NextLink href="/baski" className="w-full flex justify-center">
                <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                  İNCELEYİN
                </button>
              </NextLink>
            </div>
            <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
              <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
                <Image src="/supply.png" className="object-cover z-40" fill />
              </div>
              <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
                PROMOSYON
              </h3>
              <p className="text-center leading-5">
                Biliyoruz!
                <br />
                Bütün işler acildir.
                <br />
                Bütün işler daima en iyi hizmeti hakeder.
                <br />
                Promosyonlarınız, plaketleriniz ya da diğer ihtiyaçlarınızın
                <br />
                kurumsal kimliğinize en uygun şekilde,
                <br />
                en hızlı ve en ekonomik tedariği için
                <br />
                PURPLE BASIM BURADA
              </p>
              <NextLink
                href="/promosyon"
                className="w-full flex justify-center"
              >
                <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                  İNCELEYİN
                </button>
              </NextLink>
            </div>
          </div>
        </main>
        <nav className="mt-14 flex flex-row justify-between px-3 py-2 text-lg w-screen text-white font-bold bg-agent-purple">
          <NextLink href="/">
            <button className="">Ne Yapıyoruz</button>
          </NextLink>
          <NextLink href="/iletisim">
            <button className="">Bize Ulaşın</button>
          </NextLink>
          <NextLink href="/kimiz">
            <button className="">Kimiz Biz</button>
          </NextLink>
        </nav>
      </mobile>
      <tablet className="hidden md:block xl:hidden">
        <Navbar />
        <div className="px-20 pb-64 -z-30">
          <Slider />
        </div>
        <div
          id="pressTablet"
          className="flex justify-evenly gap-y-10 -translate-y-48 flex-wrap"
        >
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/design.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              TASARIM
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi tasarımı hakeder.
              <br />
              İçeriklerinizin kurumsal kimliğinize en uygun şekilde,
              <br />
              en hızlı ve en eşsiz tasarımları için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/tasarim" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/press.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              BASKI
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi baskıyı hakeder.
              <br />
              Kataloglarınız, ambalajlarınız ya da kartvizitinizin
              <br />
              en hızlı ve en ekonomik baskıları için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/baski" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/supply.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              PROMOSYON
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi hizmeti hakeder.
              <br />
              Promosyonlarınız, plaketleriniz ya da diğer ihtiyaçlarınızın
              <br />
              kurumsal kimliğinize en uygun şekilde,
              <br />
              en hızlı ve en ekonomik tedariği için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/promosyon" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
        </div>
        <Footer />
      </tablet>
      <desktop className="hidden xl:block">
        <Navbar />
        <div className="px-20 pb-64 -z-30">
          <Slider />
        </div>
        <div
          id="pressDesktop"
          className="flex justify-evenly gap-y-10 -translate-y-48 flex-wrap"
        >
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/design.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              TASARIM
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi tasarımı hakeder.
              <br />
              İçeriklerinizin kurumsal kimliğinize en uygun şekilde,
              <br />
              en hızlı ve en eşsiz tasarımları için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/tasarim" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/press.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              BASKI
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi baskıyı hakeder.
              <br />
              Kataloglarınız, ambalajlarınız ya da kartvizitinizin
              <br />
              en hızlı ve en ekonomik baskıları için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/baski" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className="flex flex-col items-center gap-y-5 z-40 w-fit px-4">
            <div className="relative w-[350px] h-[350px] rounded-full border-4 border-agent-orange z-40">
              <Image src="/supply.png" className="object-cover z-40" fill />
            </div>
            <h3 className="text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider">
              PROMOSYON
            </h3>
            <p className="text-center leading-5">
              Biliyoruz!
              <br />
              Bütün işler acildir.
              <br />
              Bütün işler daima en iyi hizmeti hakeder.
              <br />
              Promosyonlarınız, plaketleriniz ya da diğer ihtiyaçlarınızın
              <br />
              kurumsal kimliğinize en uygun şekilde,
              <br />
              en hızlı ve en ekonomik tedariği için
              <br />
              PURPLE BASIM BURADA
            </p>
            <NextLink href="/promosyon" className="w-full flex justify-center">
              <button className="text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3">
                İNCELEYİN
              </button>
            </NextLink>
          </div>
        </div>
        <Footer />
      </desktop>
    </>
  );
}
