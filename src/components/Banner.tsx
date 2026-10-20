'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner () {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div
      className="relative flex min-h-[320px] items-end overflow-hidden bg-emerald-950 sm:min-h-[380px]"
      onClick={() => setIndex((currentIndex) => (currentIndex + 1) % covers.length)}
    >
        <Image
          src={covers[index]}
          alt="Banner image"
          fill
          priority
          className="object-cover"
        />
      {
        session ? <div className="absolute right-10 top-5 z-30 text-xl font-semibold text-stone-50">
          Welcome {session.user?.name}</div> : null
      }
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 text-stone-50 sm:px-8 sm:py-20">
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">where every event finds its venue</h1>
        <h3 className="mt-6 max-w-xl text-base font-normal leading-7 text-stone-200 sm:text-lg">Finding the perfect venue has never been easier. Whether it&apos;s a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
      </div>
      <button 
      className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
      onClick={(e) =>{ e.stopPropagation(); router.push('/venue')}}
      >
        Select Venue
      </button>
    </div>
  );
}
