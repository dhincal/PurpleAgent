import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import flameurl from '../../public/flame.jpg'
import Navbar from '@/components/navbar'


export default function Footer() {
    return (
        <>
            <footer className='bg-agent-gray hidden xl:flex py-12'>
                <div className='flex justify-center items-center w-1/3'>
                    <div>
                        <Image src="/logo.png"
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
                <div className='px-20 py-5 flex flex-col border-x-2 border-agent-purple text-center'>
                    <p className='text-2xl font-medium'>info@purpleajans.com.tr</p>
                    <p className='text-2xl font-medium'>0535 689 42 82</p>
                    <p className='text-2xl font-medium'>Maltepe Mah. Litros Yolu Sk. Matbaacılar Sitesi ZC5</p>
                    <p className='text-2xl font-medium'>Zeytinburnu/İstanbul</p>
                </div>

                <div className='flex justify-center gap-x-3 px-10 w-1/3'>
                    <Image src="/instagram.svg"
                        height={48}
                        width={48}
                    />
                    <Image src="/linkedin.svg"
                        height={48}
                        width={48}
                    />
                </div>
            </footer>
            <footer className='bg-agent-gray hidden md:flex xl:hidden py-6'>
                <div className='flex justify-center w-1/3 items-center'>
                    <div>
                        <Image src="/logo.png"
                            height={100}
                            width={300}
                        />
                    </div>
                </div>
                <div className='flex flex-col border-x-2 border-agent-purple text-center items-center w-2/5'>
                    <p className='text-lg font-medium w-4/5'>info@purpleajans.com.tr</p>
                    <p className='text-lg font-medium w-4/5'>0535 689 42 82</p>
                    <p className='text-lg font-medium w-4/5'>Maltepe Mah. Litros Yolu Sk. Matbaacılar Sitesi ZC5</p>
                    <p className='text-lg font-medium w-4/5'>Zeytinburnu/İstanbul</p>
                </div>

                <div className='flex justify-center gap-x-3 px-10 w-1/3'>
                    <Image src="/instagram.svg"
                        height={48}
                        width={48}
                    />
                    <Image src="/linkedin.svg"
                        height={48}
                        width={48}
                    />
                </div>
            </footer>

        </>
    )
}
