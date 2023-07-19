"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function AdminProfile() {
  const { data: session } = useSession();
  const initialData = {
    email: "",
    first_name: "Админ",
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
  };
  const [userData, setUserData] = useState(initialData);
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/byId/${session?.user.id}`;
  async function getUser() {
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
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-10 h-10 rounded-full"
        src={userData.imgURL}
        alt="avatar"
      />
      <div className="text-[18px]">{userData.first_name}</div>
    </div>
  );
}
