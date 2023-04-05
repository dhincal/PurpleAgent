import Head from 'next/head'
import NextLink from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'



export default function Navbar() {
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
            <nav className='hidden md:flex justify-center w-screen bg-gradient-to-r from-agent-purple from-40% via-agent-dark via-90% to-agent-dark font-normal tracking-widest text-xl text-white gap-x-16 py-10 '>
                <NextLink href="#">
                    <p>KİMİZ BİZ</p>
                </NextLink>
                <NextLink href="#">
                    <p>
                        NE YAPIYORUZ
                    </p>
                </NextLink>
                <NextLink href="/contact">
                    <p>
                        BİZE ULAŞIN
                    </p>
                </NextLink>
            </nav>
            <nav className='md:hidden bg-white flex justify-between w-screen p-4'>
                <Image src="/logo.png"
                    height={400}
                    width={150}
                />
                <Bars3Icon className='w-12' />
            </nav>
        </>
    )
}