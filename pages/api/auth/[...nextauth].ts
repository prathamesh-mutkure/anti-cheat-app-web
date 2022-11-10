import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../helpers/api/user-api";
import { User } from "../../../models/user-models";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // maxAge: 60 * 60,
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: async (credentials, req) => {
        try {
          const { id, password } = credentials as {
            id: string;
            password: string;
          };

          const user: User = await getUser(id, password);

          if (user) {
            return user;
          }

          return null;
        } catch (e) {
          throw new Error(e.message || "Login Failed!");
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    session: async ({ session, token }) => {
      session.user = token.user;

      return session;
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },

  secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions);
