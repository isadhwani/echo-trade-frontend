// Navigation Component

'use client';

import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from "@/models/models";
// import logo from '@/images/mockLogo.png';

function classNames(...classes: String[]) {
  const classesadfa =  classes.filter(Boolean).join(' ');
  console.log(classesadfa);
  return classesadfa;
}

//Add type assertion syntax to the Navigation function
// currentPath: navigation array
// each individual page has a const navigation array and this is passed to Navigation
interface NavigationProps {
  currentPath:  NavigationItem[];
}

const Navigation = (props : NavigationProps) => {
  const currentPath = props.currentPath

  return (
    <Disclosure as="nav" className="bg-dark-theme">
      {({ open }) => (
        <> 

        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              { /* logo */ }
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                <img
                      alt="ECHO"
                      src="https://gcdnb.pbrd.co/images/74MbLqKX2pSi.png?o=1"
                      className="h-8 w-auto"
                    />
                </Link>
              </div>

              { /* for larger display */ }
              <div className="hidden sm:ml-6 sm:block">
                <div className="absolute right-0 flex space-x-4">
                  {currentPath.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-slate-700 text-slate-200' : 'text-slate-400 hover:bg-slate-400 hover:text-dark-theme',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        { /* for mobile display */ }
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {currentPath.map((item : NavigationItem) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-slate-700 text-slate-200' : 'text-slate-400 hover:bg-slate-400 hover:text-dark-theme',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
        
        </>
      )}

    </Disclosure>
  );
};

export default Navigation;