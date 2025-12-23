'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { impressumContent } from '@/data/impressum'

interface ImpressumModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-8 shadow-xl transition-all">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <XMarkIcon className="h-6 w-6" />
                  <span className="sr-only">Schließen</span>
                </button>

                <div className="prose prose-sm max-w-none">
                  <Dialog.Title as="h2" className="text-2xl font-bold mb-4">
                    {impressumContent.title}
                  </Dialog.Title>

                  {impressumContent.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {section.heading}
                      </h3>
                      <div
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
