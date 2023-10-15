import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthConfig: NextAuthOptions = {
  // Providers = Github, email, google, etc.
  providers: [
    CredentialsProvider({
      name: 'Sign In',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const dbCall = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('test')
            }, 500)
          })
        }
        // TODO:Appel à la DB + gestion de la reponse
        const user: any = await dbCall()

        return user
      },
    }),
  ],
}

const handler = NextAuth(nextAuthConfig)

export { handler as GET, handler as POST }
