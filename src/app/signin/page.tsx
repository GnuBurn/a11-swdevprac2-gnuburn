import SignInForm from '@/components/SignInForm'

export default async function SignInPage({ searchParams }: PageProps<'/signin'>) {
  const { callbackUrl, error } = await searchParams

  return (
    <main className="flex min-h-[calc(100vh-50px)] items-center justify-center bg-stone-100 px-5 py-12">
      <SignInForm
        callbackUrl={typeof callbackUrl === 'string' ? callbackUrl : '/'}
        initialError={typeof error === 'string'}
      />
    </main>
  )
}
