import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function ContactUs() {
    
    return (
        <>
            <Head>
                <title>Purple Agent - Promosyon</title>
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
                macenlis
                <div className='flex flex-col gap-y-5 w-full'>
                    <h3 className='text-6xl text-agent-purple text-center overflow-y-hidden font-bold '>BİZE ULAŞIN</h3>
                    <div className='flex gap-x-24 w-full justify-between'>
                        <div className='flex flex-col items-center gap-y-20 w-5/12'>
                            <input className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' placeholder='ADINIZ-SOYADINIZ' />
                            <input className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' placeholder='E-MAIL' />
                            <input className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' placeholder='TELEFON' />
                        
                        </div>
                        <div className='w-5/12 overflow-y-hidden'>
                            <textarea className='text-xl w-full min-h-full resize-none border-agent-gray border-2 p-2 focus:outline-none placeholder:text-black/60 focus:text-agent-purple focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' placeholder='MESAJINIZ'/>
                        </div>
                    </div>
                    <button className='text-white font-bold text-2xl bg-agent-purple w-5/12 self-end'>GÖNDER</button>
                </div>
            </main>
        </>
    )
}
