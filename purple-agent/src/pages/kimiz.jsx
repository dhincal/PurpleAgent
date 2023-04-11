import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <>
        <Head>
            <title>Purple Ajans - Kimiz Biz</title>
            <meta name="description" content="Purple Agent" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        <main className='flex flex-col items-center gap-y-10 px-[20vw]'>
           <div className='mt-10'>
             <Link href="/">
                <Image src="/logo.png"
                    height={400}
                    width={350}
                />
            </Link>
            <h3 className='text-6xl text-agent-purple text-center overflow-y-hidden font-bold '>KiMiZ BiZ</h3>
           </div>
            <p className='text-2xl font-light text-center'> 
                Yaklaşık 15 yıldır Reklam ve Baskı dünyasının içinde satış ve üretim konularında uzmanlaşmış bir ekibiz.
                Tasarımdan baskıya giden yolda, aşağıda listelediğimiz tüm konularda çözüm ortağınız olmaya talibiz.
            </p>

            <div className='flex flex-col text-2xl text-center gap-y-14 font-light'>
                <h6 className='font-bold'>OFSET / DİJİTAL BASKI</h6>
                <p>Kurumsal Evrak; <br />
                Antetli kağıt, kartvizit, zarf, sürekli form, etiket, kurum kitapçığı...
                </p>
                <p>Tanıtım Ürünleri; <br />
                Broşür, katalog, afiş, insert, davetiye, dosya, ajanda, bloknot, takvim, defter...
                </p>
                <p>Ambalaj; <br />
                Etiket, poşet, kutu...
                </p>
                <p>Display Ürünler; <br />
                Pano, dönkart, bayrak, flama, araç giydirme...
                </p>
                <h6 className='font-bold'>GRAFİK TASARIM</h6>
                <p>Kurumsal Kimlik <br />
                Amblem, logo, dosya, antetli kağıt, zarf, kartvizit, değerli evrak...
                </p>
                <p>Ambalaj Tasarım <br />
                Etiket, ambalaj, poşet, kutu...
                </p>
                <p>Tanıtım Ürünleri;<br />
                Broşür, katalog, afiş, insert, davetiye, dosya, ajanda, bloknot, takvim, CD kapağı, defter...
                </p>
                <p>Outdoor Ürünler;<br />
                Billboard, afiş, poster, pano, dönkart, bayrak, flama, araç giydirme...
                </p>
                <p>Süreli Yayınlar;<br />
                Dergi ve gazete ilanı...
                </p>
                <h6 className='font-bold'>WEB TASARIM VE UYGULAMALARI</h6>
                <p>Web tasarımı<br />
                Web içerik Yönetim Paneli
                </p>
                <h6 className='font-bold'>PROMOSYON</h6>
                 <p>Tasarım, İmalat ve Tedarik;<br />
                Firmaların kurumsal kimliklerini en doğru şekilde yansıtacak özel tasarımlar, proje önerileri...
                </p>
            </div>
        </main>
        <Footer />
        
    </>
  )
}
