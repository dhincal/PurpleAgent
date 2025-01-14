import Head from 'next/head'
import Image from 'next/image'
// import Zoom from 'next-image-zoom' 
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import fs from 'fs'
import path from 'path'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export async function getStaticProps() {
    const POST_FOLDER_NAME = "BASKI";
    const POSTS_DIRECTORY = path.join(process.cwd(), "public", POST_FOLDER_NAME);

    const designFolderLength = fs.readdirSync(POSTS_DIRECTORY).length

    return {
        props: {
            designFolderLength
        }
    }
}


export default function Design({designFolderLength}) {
    let i = 1;
    let designImages =  [];
    while (i <= designFolderLength) {
        designImages.push("/BASKI/BASKI_" + i + ".jpg");
        i++;
    }

    let ImageList = (
        <div className='grid grid-cols-2 gap-x-5 gap-y-5 md:gap-x-24 md:gap-y-10 z-40 h-full relative my-20'>
            {designImages.map((image) => (
                    
                    // <Zoom
                    //     key={image}
                    //     src={image}
                    //     height={550}
                    //     width={550}
                    //     className='border-2 border-agent-purple z-40 overflow-y-hidden'
                        
                    // />
                    <Zoom>

                    <img 
                    key={image}
                    src={image}
                    height={550}
                    width={550}
                    className='border-2 border-agent-purple z-40 overflow-y-hidden'   
                    alt='baskı' 
                    />                
                    </Zoom>
                )
            )}
        </div>
    )
    
    return (
        <>
            <Head>
                <title>Purple Basım - Baskı</title>
                <meta name="description" content="Purple Agent" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Navbar></Navbar>
            <main className='flex flex-col items-center gap-y-2 px-5'>
                <Link href="/" className='mt-10'>
                    <Image src="/newLogo.jpg"
                    height={400}
                    width={250}
                    />
                </Link>
                <div className='flex flex-col gap-y-1 tracking-wider'>
                    <h3 className='text-3xl md:text-4xl  text-agent-purple text-center overflow-y-hidden font-bold mt-10'>BASKI</h3>
                    <p className='md:text-lg text-sm text-center'>Ofset ve Dijital</p>
                </div>
                {ImageList}
            </main>
            <Footer />
        </>
    )
}
