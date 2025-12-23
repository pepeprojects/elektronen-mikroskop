import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactBox() {
  return (
    <div className="bg-gradient-to-br from-secondary to-secondary p-8 rounded-lg shadow-lg text-white">
      <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
      <p className="mb-6">
        Haben Sie Fragen zu den Produkten? Rufen Sie uns an!
        Wir stehen Ihnen selbstverständlich gerne für eine Beratung zur Verfügung.
      </p>

      <div className="space-y-4">
        <a
          href="tel:+4970719346660"
          className="flex items-center gap-3 text-xl font-bold hover:underline"
        >
          <PhoneIcon className="h-6 w-6" />
          +49 (0) 7071 / 93 46 - 60
        </a>

        <a
          href="mailto:sales@elektronen-mikroskop.com"
          className="flex items-center gap-3 hover:underline"
        >
          <EnvelopeIcon className="h-6 w-6" />
          sales@elektronen-mikroskop.com
        </a>
      </div>
    </div>
  )
}
