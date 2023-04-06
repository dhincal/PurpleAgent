import { useEffect } from "react";
import '@/styles/globals.css'
import mailgo from "mailgo";

const mailgoConfig = {
  dark: true,
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return <Component {...pageProps} />
}
