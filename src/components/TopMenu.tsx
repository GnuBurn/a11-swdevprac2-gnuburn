import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import TopMenuItem from './TopMenuItem';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed left-0 right-0 top-0 z-30 flex h-[50px] items-center justify-end gap-2 border-b border-stone-200 bg-white/90 px-4 shadow-sm backdrop-blur sm:px-8">
      {
        session ?
          <Link href="/api/auth/signout" className="absolute left-4 flex items-center rounded px-6 py-2 text-base font-semibold text-orange-800 underline transition hover:bg-orange-50 hover:text-orange-950 sm:left-8">
            Sign-Out of {session.user?.name}
          </Link>
        : <Link href="/api/auth/signin" className="absolute left-4 flex items-center rounded px-6 py-2 text-base font-semibold text-orange-800 underline transition hover:bg-orange-50 hover:text-orange-950 sm:left-8">
            Sign-In
          </Link>
      }
      <TopMenuItem title="Booking" pageRef='/booking'/>
      <Image src={'/img/logo.png'} className="pointer-events-none h-full w-auto" alt='logo'
      width={0} height={0} sizes='100vh'/>
    </div>
  )
}
