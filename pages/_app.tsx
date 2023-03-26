import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}
