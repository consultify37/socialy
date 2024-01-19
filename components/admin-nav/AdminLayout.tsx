import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { doc, getDoc } from 'firebase/firestore'
import ReactLoading from 'react-loading'
import Head from 'next/head'
import toast from 'react-hot-toast'

type Props = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const router = useRouter()
  const [isLoadingSignout, setIsLoadingSignout] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid)
        const userDocSnap = await getDoc(userDoc)
        const userDocData: any = userDocSnap.data()
        
        if ( !userDocData.roles ) {
          toast.error('Nu aveți permisii suficiente să accesați această pagină.', { duration: 3000 })
          router.push('/admin/login')
        } else if ( !userDocData.roles.includes("admin") && !userDocData.roles.includes("socialy") ) {
          toast.error('Nu aveți permisii suficiente să accesați această pagină.', { duration: 3000 })
          router.push('/admin/login')
        }

      } else {
        router.push('/admin/login')
      }
    })

    return () => unsubscribe()
  }, [router])

  const signout = async () => {
    setIsLoadingSignout(true)
    await signOut(auth)
    setIsLoadingSignout(false)
  }

  return (
    <>
      <Head>
        <title>Socialy | Admin</title>
      </Head>
      <div className='flex flex-row w-screen min-h-screen p-4'>
        <div className='bg-secondary fixed rounded-3xl w-1/5 min-w-[256px] max-w-80 mr-8 h-[calc(100vh-32px)] flex flex-col justify-between p-4'>
          <div className='flex flex-col'>
            <Image
              src="/images/logo.svg"
              width={120}
              height={38}
              className="align-middle w-[180px] mt-6 ml-6"
              alt="Consultify logo"
            />
            <div className='flex flex-col mt-16 gap-y-6 ml-6'>
              <Link href='/admin/slide-homepage'>
                <p className='text-lg font-bold text-onSecondary'>
                  slide homepage
                </p>
              </Link>
              <Link href='/admin/categorii-campanii'>
                <p className='text-lg font-bold text-onSecondary'>
                  categorii campanii
                </p>
              </Link>
              <Link href='/admin/campanii'>
                <p className='text-lg font-bold text-onSecondary'>
                  campanii
                </p>
              </Link>
            </div>
          </div>

          { isLoadingSignout ?
            <div className='w-full flex flex-col items-center justify-center'>
              <ReactLoading type="spin" color="#0CFF00" width={32} height={32} />
            </div> :
            <button 
              className="bg-primary font-bold flex items-center justify-center w-full mx-auto px-12 py-3 text-onPrimary rounded-[28.5px] hover:scale-[1.05] transition-all"
              onClick={signout}
            >
                logout
            </button> 
          }
        </div>
        <div className='w-1/5 min-w-[256px] max-w-80 mr-8 h-[calc(100vh-32px)]'></div>

        <div className='bg-admin-background rounded-3xl w-[calc(80%-32px)] min-h-[calc(100vh-32px)] p-12'>
          { children } 
        </div>
      </div>
    </>
  )
}

export default AdminLayout