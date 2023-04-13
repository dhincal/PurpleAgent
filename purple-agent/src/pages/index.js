import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import flameurl from '../../public/flame.jpg'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Ajans</title>
        <meta name="description" content="Purple Agent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <mobile className="md:hidden">
        <Navbar />
        <main className='flex flex-col items-center'>
          <div className='bg-agent-gray relative flex w-screen h-[50vh]'>
            <Image src={flameurl} className="bottom-0 absolute z-10" />

            <div className='z-20 flex flex-col gap-y-16 mt-16 pl-8'>
              <div className='flex flex-col'>
                <h3 className='text-white text-3xl w-full font-bold tracking-widest overflow-y-hidden'>KURUMSAL</h3>
                <h5 className='text-agent-purple font-semibold overflow-y-hidden text-3xl'>baskı hizmetlerinde</h5>
                <h3 className='text-white text-3xl w-full font-bold tracking-widest overflow-y-hidden'>ÇÖZÜM ORTAĞI</h3>
              </div>
            </div>
          </div>
          <div>
            <NextLink href="/kimiz">
              <button className='bg-agent-purple text-white font-medium text-xl tracking-wide p-2 px-5 rounded-full mt-10'>TANIŞALIM</button>
            </NextLink>
          </div>
        </main>
        <nav className='absolute bottom-0 bg-gradient-to-r from-agent-purple from-10% via-agent-dark via-70% to-agent-dark flex text-white font-light text-xl w-screen justify-between p-4'>
          <NextLink href="/tasarim">
            <p>TASARIM</p>
          </NextLink>
          <NextLink href="/baski">
            <p className=''>BASKI</p>
          </NextLink>
          <NextLink href="/promosyon">
            <p>PROMOSYON</p>
          </NextLink>
        </nav>
      </mobile>
      <tablet className="hidden md:block xl:hidden">
        <Navbar />
        <div className='px-12 bg-gradient-to-b from-agent-dark from-40% to-agent-purple pb-64 -z-30'>
          <div className='bg-agent-gray relative h-[70vh] flex'>
            <Image src={flameurl} className="bottom-0 absolute z-10" />

            <div className='z-20 flex flex-col gap-y-16 mt-16 pl-16'>

              <Image src="/logo.png"
                height={400}
                width={400}
                className='-ml-6'
              />
              <div className='flex flex-col'>
                <h3 className='text-white text-4xl w-full font-bold tracking-widest overflow-y-hidden'>KURUMSAL</h3>
                <h5 className='text-agent-purple font-semibold overflow-y-hidden text-4xl'>baskı hizmetlerinde</h5>
                <h3 className='text-white text-4xl w-full font-bold tracking-widest overflow-y-hidden'>ÇÖZÜM ORTAĞI</h3>
              </div>
              <div>
                <NextLink href="/kimiz">

                  <button className='bg-agent-purple text-white font-medium text-3xl tracking-wide p-2 px-5 rounded-full'>TANIŞALIM</button>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div id='pressTablet' className='flex justify-evenly gap-y-10 -translate-y-48 flex-wrap'>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/design.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>TASARIM</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi tasarımı hakeder.<br />
              İçeriklerinizin kurumsal kimliğinize en uygun şekilde,<br />
              en hızlı ve en eşsiz tasarımları için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/tasarim" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/press.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>BASKI</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi baskıyı hakeder.<br />
              Kataloglarınız, ambalajlarınız ya da kartvizitinizin<br />
              en hızlı ve en ekonomik baskıları için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/baski" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/supply.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>PROMOSYON</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi hizmeti hakeder.<br />
              Promosyonlarınız, plaketleriniz ya da diğer ihtiyaçlarınızın<br />
              kurumsal kimliğinize en uygun şekilde,<br />
              en hızlı ve en ekonomik tedariği için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/promosyon" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
        </div>
        <Footer />
      </tablet>
      <desktop className='hidden xl:block'>
        <Navbar />
        <div className='px-20 bg-gradient-to-b from-agent-dark from-40% to-agent-purple pb-64 -z-30'>
          <div className='bg-agent-gray relative h-screen flex'>
            <Image src={flameurl} className="bottom-0 absolute z-10" />

            <div className='z-20 flex flex-col gap-y-16 mt-36 pl-16'>

              <Image src="/logo.png"
                height={400}
                width={600}
              />
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-white text-5xl w-full font-bold tracking-widest overflow-y-hidden'>KURUMSAL</h3>
                <h5 className='text-agent-purple font-semibold overflow-y-hidden text-5xl'>baskı hizmetlerinde</h5>
                <h3 className='text-white text-5xl w-full font-bold tracking-widest overflow-y-hidden'>ÇÖZÜM ORTAĞI</h3>
              </div>
              <div className='h-fit'>
                <NextLink href="/kimiz">

                  <button className='bg-agent-purple text-white font-medium text-4xl tracking-wide p-2 px-5 rounded-full'>TANIŞALIM</button>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div id='pressDesktop' className='flex justify-evenly gap-y-10 -translate-y-48 flex-wrap'>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/design.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>TASARIM</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi tasarımı hakeder.<br />
              İçeriklerinizin kurumsal kimliğinize en uygun şekilde,<br />
              en hızlı ve en eşsiz tasarımları için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/tasarim" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/press.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>BASKI</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi baskıyı hakeder.<br />
              Kataloglarınız, ambalajlarınız ya da kartvizitinizin<br />
              en hızlı ve en ekonomik baskıları için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/baski" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
          <div className='flex flex-col items-center gap-y-5 z-40 w-fit px-4'>
            <div className='relative w-[350px] h-[350px] rounded-full border-4 border-agent-purple z-40'>
              <Image src="/supply.png"
                className='object-cover z-40'
                fill
              />
            </div>
            <h3 className='text-5xl text-agent-purple text-center overflow-y-hidden font-bold tracking-wider'>PROMOSYON</h3>
            <p className='text-center leading-5'>Biliyoruz!<br />
              Bütün işler acildir.<br />
              Bütün işler daima en iyi hizmeti hakeder.<br />
              Promosyonlarınız, plaketleriniz ya da diğer ihtiyaçlarınızın<br />
              kurumsal kimliğinize en uygun şekilde,<br />
              en hızlı ve en ekonomik tedariği için<br />
              PURPLE AJANS BURADA</p>
            <NextLink href="/promosyon" className='w-full flex justify-center'>
              <button className='text-xl border-t text-agent-purple border-agent-purple w-9/12 pt-4 font-medium tracking-wider mt-3'>
                İNCELEYİN
              </button>
            </NextLink>
          </div>
        </div>
        <Footer />

      </desktop>
    </>
  )
}
