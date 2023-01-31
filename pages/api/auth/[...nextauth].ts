import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../helpers/api/user-api";
import { User } from "../../../models/user-models";

// Define the NextAuth options for the authentication process
export const authOptions: NextAuthOptions = {
  // Use JWT for session management
  session: {
    strategy: "jwt",
    // maxAge: 60 * 60,  // Optionally set maxAge for session expiration
  },

  // Use the credentials provider for authentication
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      // Verify the credentials provided by the user
      authorize: async (credentials, req) => {
        try {
          // Destructure the id and password from the credentials object
          const { id, password } = credentials as {
            id: string;
            password: string;
          };

          // Get the user details from the user API
          const user: User = await getUser(id, password);

          // If a user was returned, return it
          if (user) {
            return user;
          }

          // Otherwise, return null
          return null;
        } catch (e) {
          // If an error occurs, throw a new error with the error message or a default message
          throw new Error(e.message || "Login Failed!");
        }
      },
    }),
  ],

  // Set the sign-in page URL
  pages: {
    signIn: "/auth/login",
  },

  // Define callbacks for the session and JWT processes
  callbacks: {
    session: async ({ session, token }) => {
      // Attach the user to the session object
      session.user = token.user;

      // Return the updated session object
      return session;
    },

    jwt: async ({ token, user }) => {
      // If a user exists, attach it to the JWT token
      if (user) {
        token.user = user;
      }

      // Return the updated JWT token
      return token;
    },
  },

  // Set the secret used for JWT signing and verification
  secret: process.env.AUTH_SECRET,
};

// Export the NextAuth instance with the defined options
export default NextAuth(authOptions);
