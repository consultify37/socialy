import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer/Footer'
import TopBar from "../components/TopBar"
import { usePathname } from 'next/navigation'
import CookiePolicy from '../components/CookiePolicy'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      if ( url != '/contact') {
        document.documentElement.classList.add('normal-scroll');
      }
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  }, [router.events]);
}

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  useNormalScrollRoutes()

  return (
    <div className="flex flex-col">
      { !pathname?.includes('/admin') ?
        <>
          <TopBar />
          <Header />
        </> : null
      }
      <main className="flex-1 relative">
        <Component {...pageProps} />
        <Toaster />
        <CookiePolicy />
      </main>
      { !pathname?.includes('/admin') ?
        <Footer /> : null
      }
    </div>
  );
}
