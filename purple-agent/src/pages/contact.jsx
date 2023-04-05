import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Purple Agent</title>
        <meta name="description" content="Purple Agent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Navbar></Navbar>
            <main className='flex flex-col items-center gap-y-2 px-5'>
                <Link href="/">
                    <Image src="/logo.png"
                    height={400}
                    width={350}
                    />
                </Link>
                <h3 className='text-6xl text-agent-purple text-center overflow-y-hidden font-bold '>BİZE ULAŞIN</h3>
            </main>
        <Footer />
    </>
  )
}
