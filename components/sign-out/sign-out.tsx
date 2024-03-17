"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export const SignOut = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  return <button onClick={() => signOut()}>Sign Out</button>;
};
