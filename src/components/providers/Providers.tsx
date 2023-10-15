'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>
}

export default Providers
