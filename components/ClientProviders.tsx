"use client"
import React from "react";
import { Toaster } from "react-hot-toast";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ClientProviders;
