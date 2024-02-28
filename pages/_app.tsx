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
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import { FavoritesContext } from '../context/FavoritesContext'

function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      if ( url != "/contact#") {
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
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('837955761665104') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return (
    <AuthContext>
      <CartContext>
        <FavoritesContext>
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
        </FavoritesContext>
      </CartContext>
    </AuthContext>
  );
}
