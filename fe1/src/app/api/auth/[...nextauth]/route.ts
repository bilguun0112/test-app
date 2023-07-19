import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };
