"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const id = session?.user.id;
  const initialData = {
    email: "админ@gmail.coms",
    first_name: "Хэрэглэгч",
    last_name: "Хэрэглэгч",
    registration_date: "2023-12-12",
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
  };
  const [userData, setUserData] = useState(initialData);
  //   console.log(session?.user.id);
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/byId/${id}`;
  async function getUser() {
    if (id !== undefined) {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (data.success) {
          setUserData(data.data);
        }
      } catch (error) {
        null;
      }
    }
  }
  useEffect(() => {
    getUser();
  }, [id !== undefined]);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-[24px] py-10">Хэрэглэгчийн мэдээлэл</div>
      <table>
        <tbody>
          <tr>
            <td className="pr-4 py-2">Овог :</td>
            <td>{userData.last_name}</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Нэр :</td>
            <td>{userData.first_name}</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">И-мэйл :</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Бүртгүүлсэн өдөр :</td>
            <td>{userData.registration_date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
