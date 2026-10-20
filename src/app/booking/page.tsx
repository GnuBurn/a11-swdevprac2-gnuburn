import { Box, Button } from '@mui/material'
import DateReserve from '@/components/DateReserve'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import getUserProfile from '@/libs/getUserProfile'

export default async function Booking() {
  const session = await getServerSession(authOptions)
  const profile = session?.user?.token ? await getUserProfile(session.user.token) : null
  const createdAt = profile ? new Date(profile.data.createdAt) : null

  return (
    <main className="min-h-screen bg-stone-100 px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {
          profile && createdAt ?
            <div className="mb-10 rounded-2xl border border-emerald-950/10 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-8">
              <div className="mb-3 text-2xl font-semibold text-emerald-950">{profile.data.name}</div>
              <table className="table-auto border-separate border-spacing-2 text-stone-700"><tbody>
                <tr><td className="font-semibold">Name</td><td>{profile.data.name}</td></tr>
                <tr><td className="font-semibold">Email</td><td>{profile.data.email}</td></tr>
                <tr><td className="font-semibold">Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td className="font-semibold">Member Since</td><td>{createdAt.toString()}</td></tr>
              </tbody></table>
            </div>
          : null
        }
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Plan your event
        </p>
        <h1 className="mb-8 text-4xl font-semibold tracking-tight text-emerald-950 sm:text-5xl">
          Venue Booking
        </h1>
      <Box component="form" className="flex flex-col gap-6">
        <DateReserve />
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
