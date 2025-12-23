import { ChevronDownIcon } from '@heroicons/react/24/outline'
import BeamsOverlay from '@/components/ui/BeamsOverlay'

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: 'url(/images/SEM_image_of_textile_1%201.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for base darkness */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Beams overlay effect */}
      <BeamsOverlay />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Ihr Partner für Präparationstechnik und Zubehör
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 drop-shadow-lg">
          für die Elektronenmikroskopie
        </h2>
        <div className="separator"></div>
      </div>

      <div className="absolute bottom-8 hidden md:block animate-bounce z-10">
        <ChevronDownIcon className="h-8 w-8 text-white drop-shadow-lg" />
      </div>
    </section>
  )
}
