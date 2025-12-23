'use client'

import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Hero is min-h-[60vh], detect when past ~60vh
      const heroHeight = window.innerHeight * 0.6
      setIsScrolled(window.scrollY > heroHeight - 80) // 80px = header height
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md' // Solid background past Hero
          : 'bg-white/10 backdrop-blur-md' // Transparent over Hero
      )}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <a
                  href="/"
                  className={cn(
                    'text-2xl md:text-3xl font-bold transition-colors duration-300',
                    isScrolled ? 'text-black' : 'text-white'
                  )}
                >
                  elektronen-mikroskop.com
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button
                  className={cn(
                    'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2',
                    isScrolled
                      ? 'text-black hover:bg-black/10 focus:ring-black'
                      : 'text-white hover:bg-white/10 focus:ring-white'
                  )}
                >
                  <span className="sr-only">Menü öffnen</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel
            className={cn(
              'md:hidden transition-colors duration-300',
              isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
            )}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Navigation items can be added here if needed */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
