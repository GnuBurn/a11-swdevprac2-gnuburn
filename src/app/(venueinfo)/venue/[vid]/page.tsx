import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params
  const venueDetail = await getVenue(vid)
  const venue: VenueItem = venueDetail.data

  return(
    <main className="min-h-[calc(100vh-50px)] bg-stone-100 px-5 py-10 text-emerald-950 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-center text-2xl font-semibold">{venue.name}</h1>
        <div className="flex flex-row overflow-hidden rounded-lg border border-emerald-950/10 bg-white shadow-md md:flex-row">
          <Image
            src={venue.picture}
            alt={venue.name}
            width={0}
            height={0}
            sizes="100vw, 68vw"
            className="w-1/3 object-cover"
          />
          <section className="flex flex-1 flex-col gap-1 border-t-4 border-emerald-800 p-7 text-left sm:p-10 md:border-l-4 md:border-t-0">
            <div>Name: {venue.name}</div>
            <div>Address: {venue.address}</div>
            <div>District: {venue.district}</div>
            <div>Province: {venue.province}</div>
            <div>Postal Code: {venue.postalcode}</div>
            <div>Tel: {venue.tel}</div>
            <div>Daily Rate: {venue.dailyrate}</div>
          </section>
        </div>
      </div>
    </main>
  )
}
