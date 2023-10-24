import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    router.push('/admin/slide-homepage')
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image 
          src="/images/logo-dark.svg"
          width={120}
          height={38} 
          className="mx-auto h-10 w-auto"  
          alt="Your Company" 
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Conectează-te la contul tău de administrator</h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder='Email'
                autoComplete="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2" 
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Parolă</label>
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div> */}
            </div>
            <div className="mt-2">
              <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder='Parolă'
                autoComplete="current-password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 px-2" 
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="flex w-full justify-center rounded-lg bg-primary px-6 py-1.5 font-semibold text-onPrimary hover:scale-[1.05] transition-all mt-2"
              onClick={login}
            >
              Conectează-te
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login