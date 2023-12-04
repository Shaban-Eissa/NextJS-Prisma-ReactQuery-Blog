"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.back()}>
      <ChevronLeft />
      Back
    </button>
  );
};

export default BackButton;
