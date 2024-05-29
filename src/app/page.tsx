import Image from "next/image";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Roosh Website",
    description: "Trial work at Roosh Company"
};

export default function Home() {
  return (
      <>
      <DefaultLayout />
      </>

  );
}
