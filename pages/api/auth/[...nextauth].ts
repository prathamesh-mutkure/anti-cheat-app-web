import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../helpers/api/user-api";
import { User } from "../../../models/user-models";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    session: async (params) => {
      // console.log("PARAMS: ");

      // console.log(params);

      return params.session;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        id: { type: "text" },
        password: { type: "text" },
      },
      authorize: async (credentials, req) => {
        try {
          const { id, password } = credentials;
          const user: User = await getUser(id, password);

          if (user) {
            return user;
          }

          return null;
        } catch (e) {
          throw e;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
