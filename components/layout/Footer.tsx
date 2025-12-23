'use client'

import { useState } from 'react'
import ImpressumModal from '@/components/ui/ImpressumModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Copyright:{' '}
            <a href="/" className="hover:underline">
              elektronen-mikroskop.com
            </a>
            {' | '}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Impressum
            </button>
          </p>
        </div>
      </footer>

      <ImpressumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
