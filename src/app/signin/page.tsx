// Sign In Page

'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Navigation from '../../components/navigation';

{ /* Navigation Tabs */ }
const navigation = [
  { name: 'Login', href: '/login', current: false },
  { name: 'Sign Up', href: '/signin', current: true },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-dark-theme-2">

      {/* Navigation */}
      
      <Navigation currentPath={navigation}/>
      
      {/* Body */ }

      <div className="">  
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Echo"
              src="https://gcdnb.pbrd.co/images/74MbLqKX2pSi.png?o=1"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-300">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-300">
                    Please Re-Enter Your Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-accent-light sm:text-sm sm:leading-6"
                  />
                </div>

                {/* TODO: add validation to check that the passwords match + security password check */}
              </div>

              <div>
                <Link href="/user_dashboard"> 
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-accent-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
 
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-24">
          This is our Sign In Page
        </div>
      </div>
    </main>
  );
}