"use client";

import { useRouter } from "next/navigation";

import { signIn, useSession } from "next-auth/react";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export const Auth = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, session, router]);

  const handleClickSignIn = () => {
    signIn();
  };

  return (
    <section className="flex items-center justify-center tracking-wide">
      <article className="flex flex-col gap-6 border p-6 border-gray-950 rounded-md ">
        <h2 className="text-2xl text-center">Authorize with Google</h2>

        <button
          onClick={handleClickSignIn}
          className="flex justify-center gap-3 items-center py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          <span>Sign In</span>
          <FontAwesomeIcon width={20} icon={faArrowRightToBracket} />
        </button>
      </article>
    </section>
  );
};
