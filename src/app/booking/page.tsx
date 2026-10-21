'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import DateReserve from '@/components/DateReserve'
import { AppDispatch } from '@/redux/store'
import { addBooking } from '@/redux/features/bookSlice'
import { BookingItem } from '../../../interfaces'

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>()

  const [bookDate, setBookDate] = useState<Dayjs | null>(null)
  const [nameLastname, setNameLastname] = useState('')
  const [tel, setTel] = useState('')
  const [venue, setVenue] = useState('')

  const makeBooking = (e: React.FormEvent) => {
    e.preventDefault()
    if (!bookDate || !nameLastname || !tel || !venue) {
      alert('Please fill in every field before booking')
      return
    }
    const item: BookingItem = {
      nameLastname,
      tel,
      venue,
      bookDate: dayjs(bookDate).format('YYYY/MM/DD')
    }
    dispatch(addBooking(item))
  }

  return (
    <main className="min-h-screen bg-stone-100 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Plan your event
        </p>
        <h1 className="mb-8 text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
          Venue Booking
        </h1>
      <Box component="form" className="flex flex-col gap-6" onSubmit={makeBooking}>
        <DateReserve
          bookDate={bookDate} nameLastname={nameLastname} tel={tel} venue={venue}
          onDateChange={setBookDate} onNameChange={setNameLastname}
          onTelChange={setTel} onVenueChange={setVenue}
        />
        <Button
          type="submit"
          name="Book Venue"
          variant="contained"
          className="self-start rounded-full bg-emerald-900 px-8 py-3 font-semibold normal-case shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-800"
        >
          Book Venue
        </Button>
      </Box>
      </div>
    </main>
  )
}
