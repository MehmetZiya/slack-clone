import { Password } from '@convex-dev/auth/providers/Password'
import GitHub from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { convexAuth } from '@convex-dev/auth/server'

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Password, GitHub, Google]
})
