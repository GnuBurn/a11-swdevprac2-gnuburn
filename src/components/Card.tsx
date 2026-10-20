'use client'

import Image from 'next/image'
import Rating from '@mui/material/Rating'
import InteractiveCard from './InteractiveCard'

export default function Card(
  { venueName, imgSrc, rating, onRate }:
  { venueName: string, imgSrc: string, rating?: number, onRate?: (rating: number) => void }
) {
  return (
    <div className="w-72">
      <InteractiveCard>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imgSrc}
            alt="Venue picture"
            fill={true}
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>
        <div className="px-5 pt-4 text-base font-bold text-emerald-950">{venueName}</div>
        {onRate ? (
          <div data-testid={`${venueName} Rating`} className="px-5 pb-4">
            <Rating
              name={`${venueName}-rating`}
              value={rating ?? 0}
              onChange={(_, newValue) => onRate(newValue ?? 0)}
            />
          </div>
        ) : (
          <div className="pb-4" />
        )}
      </InteractiveCard>
    </div>
  );
}
