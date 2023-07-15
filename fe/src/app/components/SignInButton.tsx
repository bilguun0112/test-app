import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function SignInButton() {
  const { data: session } = useSession();
  // console.log(session?.user);
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
  return (
    <button className="text-green-600 ml-auto" onClick={() => signIn()}>
      Sign In
    </button>
  );
}
