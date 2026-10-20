'use client'

import Image from 'next/image'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SignInForm({ callbackUrl, initialError }: { callbackUrl: string, initialError: boolean }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(initialError)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const result = await signIn('credentials', { email, password, redirect: false })

    if (result?.ok && !result.error) {
      // full reload so server components (TopMenu, layout) pick up the new session
      window.location.href = callbackUrl
    } else {
      setError(true)
      setLoading(false)
    }
  }

  const inputClass = 'w-full rounded-md border border-stone-300 bg-white px-4 py-3 text-lg text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20'

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <Image src="/img/logo.png" alt="logo" width={0} height={0} sizes="200px" className="h-20 w-auto" />
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5 rounded-2xl bg-white p-10 shadow-lg">
        {
          error ?
            <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
              Sign in failed. Check the details you provided are correct.
            </div>
          : null
        }
        <label className="flex flex-col gap-2 text-base font-semibold text-stone-800">
          Email
          <input type="email" name="email" placeholder="email" required autoComplete="email"
            value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-base font-semibold text-stone-800">
          Password
          <input type="password" name="password" placeholder="password" required autoComplete="current-password"
            value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
        </label>
        <button type="submit" disabled={loading}
          className="mt-2 w-full rounded-md bg-emerald-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-800 disabled:opacity-60">
          {loading ? 'Signing in...' : 'Sign in with Credentials'}
        </button>
      </form>
    </div>
  )
}
