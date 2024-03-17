import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectDB } from "@/utils/connect-db";
import { ENV_VARIABLES } from "@/types/env-variables";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: ENV_VARIABLES.GOOGLE_CLIENT_ID,
      clientSecret: ENV_VARIABLES.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDB();

        const userExists = await User.findOne({ email: profile?.email });

        if (!userExists && profile) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
