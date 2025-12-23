import ContactBox from '@/components/ui/ContactBox'

export default function ProductPortfolio() {
  return (
    <section className="background-2 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Unser Produktportfolio
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Eine gute Probenpräparation ist der Schlüssel für gute REM-Aufnahmen und Analysen.
              Wir beliefern Sie mit den passenden Geräten, Werkzeugen und Verbrauchsmaterialien.
            </p>
            <p className="text-lg text-gray-700">
              Unsere Produktkataloge werden gerade überarbeitet. Bitte fordern Sie aktuelle Infos
              unter 07071 / 9346-60 oder sales@elektronen-mikroskop.com an.
            </p>
          </div>

          <div className="md:col-span-5">
            <ContactBox />
          </div>
        </div>
      </div>
    </section>
  )
}
