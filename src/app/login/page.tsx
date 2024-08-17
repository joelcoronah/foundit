"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { GoogleButton } from "../../components/GoogleButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <Image
        src="/logo.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <GoogleButton signIn={() => signIn()} />
    </div>
  );
};

export default Login;
