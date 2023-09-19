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

    const [nameBlur, setNameBlur] = useState(true)
    const [emailBlur, setEmailBlur] = useState(true)
    const [phoneBlur, setPhoneBlur] = useState(true)
    const [messageBlur, setMessageBlur] = useState(true)

    const [state, setState] = useState(initState);
    const { values, isLoading, error } = state;
    

   const onSubmit = async () => {
        values.name = nameInput
        values.email = emailInput
        values.phone = phoneInput
        values.message = messageInput
       setState(() => ({
            isLoading: true,
        }));
    try {
        await sendContactForm(values);
        
        setState(initState);
        setMessageInput("");
        setState(() => ({
            isLoading: false,
        }));
    } catch (error) {
        setState((prev) => ({
            ...prev,
            isLoading: false,
            error: error.message,
        }));
        console.log(error);
    }
  };

    return (
        <>
            <Head>
                <title>Purple Basım - İletişim</title>
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
                <form className='flex flex-col gap-y-5 w-full overflow-y-hidden mt-10' onSubmit={(e) => e.preventDefault()}>
                    <h3 className=' text-3xl md:text-4xl text-agent-purple text-center overflow-hidden font-bold whitespace-nowrap h-20'>BiZE ULAŞIN</h3>
                    
                    <div className='flex gap-x-24 w-full justify-between flex-col gap-y-12 md:flex-row'>
                        <div className='flex flex-col items-center gap-y-5 md:gap-y-20 w-full md:w-5/12'>
                            <div className='w-full flex flex-col relative gap-y-2'>
                                <input 
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value) }
                                onBlur={(e) => e.target.value === ''? setNameBlur(false): setNameBlur(true)}
                               
                                className={`${nameBlur ? "" : "border-red-500"} border-b-2 border-agent-gray text-lg md:text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200`} 
                                placeholder='* ADINIZ-SOYADINIZ' 
                                />
                                <p className={`${nameBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen bir isim ve soyisim giriniz.</p>
                            </div>
                            <div className='w-full flex flex-col relative gap-y-2'>
                                <input 
                                value={emailInput} 
                                onChange={(e) => setEmailInput(e.target.value)}
                                onBlur={(e) => e.target.value.includes(".") && e.target.value.includes("@") ? setEmailBlur(true): setEmailBlur(false)}
                                
                                className={`${emailBlur ? "" : "border-red-500"} border-b-2 border-agent-gray text-lg md:text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200`} 
                                placeholder='* E-MAIL' 
                                />
                                <p className={`${emailBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen geçerli bir e-mail giriniz. </p>
                            
                            </div>
                            <div className='w-full flex flex-col relative gap-y-2'>

                                <input 
                                value={phoneInput}
                                onChange={(e) => setPhoneInput(e.target.value)}
                                onBlur={(e) => e.target.value.length >= 4 && e.target.value.length <= 18 && e.target.value.match(/^[0-9]*$/) ? setPhoneBlur(true) : setPhoneBlur(false)} 
                                maxLength={18}
                                className={`${phoneBlur ? "" : "border-red-500"} border-b-2 border-agent-gray text-lg md:text-2xl placeholder:text-black/60 w-full focus:text-agent-purple focus:outline-none focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200`} 
                                 placeholder='* TELEFON' 
                                />
                                <p className={`${phoneBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0`}>Lütfen bir telefon numarası giriniz. </p>
                            
                            </div>
                        
                        </div>
                        <div className='w-full md:w-5/12 overflow-y-hidden'>
                            <textarea
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onBlur={(e) => e.target.value === '' ? setMessageBlur(false): setMessageBlur(true)}
                                rows={5}
                                className={`${messageBlur ? "" : "border-red-500"} text-lg md:text-xl w-full min-h-full resize-none border-agent-gray border-2 p-2 focus:outline-none placeholder:text-black/60 focus:text-agent-purple focus:border-agent-purple focus:placeholder:text-agent-purple transition-colors duration-200`} 
                                placeholder='* MESAJINIZ'
                            />
                             <p className={`${messageBlur ? "opacity-0" : ""} text-sm text-red-500 italic bottom-0 mt-2`}>Lütfen bir mesaj yazınız. </p>
                            
                        </div>
                    </div>
                    <button   
                       
                        disabled={ nameInput === "" || emailInput === "" || phoneInput === "" || messageInput === "" || !nameInput || !phoneInput || !emailInput || !messageInput}
                        onClick={onSubmit} 
                        className={`${isLoading ? "p-1.5" : "p-1"} text-white font-bold text-2xl bg-agent-purple w-full md:w-5/12 self-end flex items-center justify-center mb-5 md:m-0 transition-all duration-200 disabled:bg-agent-purple/50`}>
                        <p className={`${isLoading ? "hidden" : ""}`}>GÖNDER</p>
                        <div className={`${isLoading ? "" : "hidden"} h-1 w-1 border-4 p-2.5 rounded-full border-t-agent-gray border-agent-gray/30 animate-spin`}></div>
                    </button>
                </form>
            </main>
        </>
    )
}
