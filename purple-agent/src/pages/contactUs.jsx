import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { sendContactForm } from '@/lib/api'



export default function ContactUs() {

    const initValues = { name: "", email: "", phone: "", message: "" };

    const initState = { isLoading: false, error: "", values: initValues };


    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    

    const [state, setState] = useState(initState);
    const { values, isLoading, error } = state;
    
   

    useEffect(() => {
    }, [nameInput])


    const buttonDown = () => {
        values.name = nameInput
        values.email = emailInput
        values.phone = phoneInput
        values.message = messageInput
        console.log(state);
    }

   const onSubmit = async () => {
        values.name = nameInput
        values.email = emailInput
        values.phone = phoneInput
        values.message = messageInput
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

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
                <div className='flex flex-col gap-y-5 w-full'>
                    <h3 className='text-6xl text-agent-purple text-center overflow-hidden font-bold whitespace-nowrap h-20'>BiZE ULAŞIN</h3>
                    
                    <div className='flex gap-x-24 w-full justify-between'>
                        <div className='flex flex-col items-center gap-y-20 w-5/12'>
                            <input 
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value) }
                               
                                className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' 
                                placeholder='ADINIZ-SOYADINIZ' 
                            />
                            <input 
                                value={emailInput} 
                                onChange={(e) => setEmailInput(e.target.value)}
                                
                                className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' 
                                placeholder='E-MAIL' 
                            />
                            <input 
                                value={phoneInput}
                                onChange={(e) => setPhoneInput(e.target.value)}
                               
                                className='border-b-2 border-agent-gray text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' 
                                placeholder='TELEFON' 
                            />
                        
                        </div>
                        <div className='w-5/12 overflow-y-hidden'>
                            <textarea
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                              
                                className='text-xl w-full min-h-full resize-none border-agent-gray border-2 p-2 focus:outline-none placeholder:text-black/60 focus:text-agent-purple focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200' 
                                placeholder='MESAJINIZ'
                            />
                        </div>
                    </div>
                    <button   
                       
                        disabled={nameInput === "" || emailInput === "" || phoneInput === "" || messageInput === ""}
                        onClick={onSubmit} 
                        className='text-white font-bold text-2xl bg-agent-purple w-5/12 self-end '>
                        GÖNDER
                    </button>
                </div>
            </main>
        </>
    )
}
