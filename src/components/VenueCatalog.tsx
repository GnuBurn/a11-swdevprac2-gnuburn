import Link from 'next/link'
import Card from './Card'

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venuesJsonReady = await venuesJson

  return (
    <section className="flex w-full flex-col items-center gap-2 px-5 py-8 sm:px-8">
      <div className="text-2xl font-semibold text-emerald-950">Select your venue</div>
      <div className="text-sm text-emerald-950">
        Explore {venuesJsonReady.count} fabulous venues in our venue catalog
      </div>
      <div className="flex w-full flex-row flex-wrap content-around justify-around gap-6 p-4">
        {venuesJsonReady.data.map((venueItem: VenueItem) => (
          <Link href={`/venue/${venueItem.id}`} key={venueItem.id}>
            <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
          </Link>
        ))}
      </div>
    </section>
  )
}
