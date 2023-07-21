"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminProfile() {
  const { data: session } = useSession();
  const initialData = {
    email: "",
    first_name: "Админ",
  };
  const [userData, setUserData] = useState(initialData);
  const router = useRouter();
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/byId/${session?.user.id}`;
  async function getUser() {
    if (session?.user) {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (data.success) {
          setUserData(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  useEffect(() => {
    getUser();
  }, [session?.user.id !== undefined]);
  return (
    <div
      onClick={() => router.push("/cargos/profile")}
      className="text-[18px] pl-5 hover:cursor-pointer"
    >
      {userData.first_name}
    </div>
  );
}
