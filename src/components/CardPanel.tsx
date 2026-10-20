'use client'

import { useReducer } from 'react'
import Card from './Card'
import Link from 'next/dist/client/link'

type Venue = { vid: string, name: string, imgSrc: string, rating: number }
type Action =
  | { type: 'rate', name: string, rating: number }
  | { type: 'remove', name: string }

const initialVenues: Venue[] = [
  { vid: '001', name: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg', rating: 0 },
  { vid: '002', name: 'Spark Space', imgSrc: '/img/sparkspace.jpg', rating: 0 },
  { vid: '003', name: 'The Grand Table', imgSrc: '/img/grandtable.jpg', rating: 0 },
]

function venueReducer(venues: Venue[], action: Action): Venue[] {
  switch (action.type) {
    case 'rate':
      return venues.map((venue) =>
        venue.name === action.name ? { ...venue, rating: action.rating } : venue
      )
    case 'remove':
      return venues.filter((venue) => venue.name !== action.name)
    default:
      return venues
  }
}

export default function CardPanel() {
  const [venues, dispatch] = useReducer(venueReducer, initialVenues)

  return (
    <section className="flex w-full flex-col gap-10 px-5 py-8 sm:px-8">
      <div className="flex w-full flex-row flex-wrap content-around justify-around gap-6 p-4">
        {venues.map((venue) => (
          <Link href={`/venue/${venue.vid}`} key={venue.vid} className="w-1/5">
            <Card
              key={venue.name}
              venueName={venue.name}
              imgSrc={venue.imgSrc}
              rating={venue.rating}
              onRate={(rating) => dispatch({ type: 'rate', name: venue.name, rating })}
            />
          </Link>
        ))}
      </div>

      <div className="flex w-full flex-col gap-3">
        <div className="text-xl font-bold text-emerald-950">Venue List with Ratings : {venues.length}</div>
        {venues.map((venue) => (
          <div
            key={venue.name}
            data-testid={venue.name}
            onClick={() => dispatch({ type: 'remove', name: venue.name })}
            className="cursor-pointer font-semibold text-emerald-950 hover:text-emerald-700"
          >
            {venue.name} {venue.rating > 0 ? `: ${venue.rating} Stars` : ''}
          </div>
        ))}
      </div>
    </section>
  );
}
