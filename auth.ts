import { AuthOptions, getServerSession } from "next-auth"
import FortyTwoProvider from "next-auth/providers/42-school";

const authOptions: AuthOptions = {
    // Configure one or more authentication providers
  providers: [
	FortyTwoProvider({
		clientId: process.env.CLIENT_ID ?? "",
		clientSecret: process.env.CLIENT_SECRET ?? ""
		
	})
    // ...add more providers here
  ],
}

/**
 * Helper function to get the session on the server without having to import the authOptions object every single time
 * @returns The session object or null
 */
const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }