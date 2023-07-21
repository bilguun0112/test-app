import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      sessionToken(sessionToken: any): unknown;
      id: string;
      email: string;
      accessToken: string;
      success: boolean;
      name: string;
    };
  }
}
