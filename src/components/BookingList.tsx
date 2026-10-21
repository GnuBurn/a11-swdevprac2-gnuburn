'use client'

import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { removeBooking } from '@/redux/features/bookSlice'

export default function BookingList() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
  const dispatch = useDispatch<AppDispatch>()

  if (bookItems.length === 0) {
    return (
      <div className="rounded-2xl border border-emerald-950/10 bg-white p-8 text-center text-lg text-stone-600 shadow-xl shadow-emerald-950/5">
        No Venue Booking
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      {bookItems.map((item) => (
        <div key={`${item.venue}-${item.bookDate}`}
          className="rounded-2xl border border-emerald-950/10 bg-white p-6 text-stone-700 shadow-xl shadow-emerald-950/5">
          <div className="text-xl font-semibold text-emerald-950">Name-Lastname: {item.nameLastname}</div>
          <div className="text-sm">Contact-Number: {item.tel}</div>
          <div className="text-sm">Venue: {item.venue}</div>
          <div className="text-sm">Date: {item.bookDate}</div>
          <button
            className="mt-4 rounded-full bg-emerald-900 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  )
}
