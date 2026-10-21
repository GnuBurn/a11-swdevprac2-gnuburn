import BookingList from '@/components/BookingList'

export default function MyBookingPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
          My Booking
        </h1>
        <BookingList />
      </div>
    </main>
  )
}
