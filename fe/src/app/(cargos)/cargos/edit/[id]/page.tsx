"use client";
import EditCargo from "@/app/components/editCargo";
import paymentMethods from "@/lib/documents/paymentMethod";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: any }) {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cargos/byId/${params.id}`;
  const [userData, setUserData] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (data.success) {
        setUserData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <EditCargo data={userData} />;
}
