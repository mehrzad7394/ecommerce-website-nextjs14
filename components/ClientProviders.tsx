"use client";
import { cartStore } from "@/lib/hooks/useCartStore";
import useLayoutService from "@/lib/hooks/useLayout";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useLayoutService();
  const [selectedTheme, setSelectedTheme] = useState("system");

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);
  const updateStore = () => {
    cartStore.persist.rehydrate();
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", updateStore);
    window.addEventListener("focus", updateStore);

    return () => {
      document.removeEventListener("visibilitychange", updateStore);
      window.removeEventListener("focus", updateStore);
    };
  }, []);

  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          toast.error(error.message);
        },
        fetcher: async (resource, init) => {
          const res = await fetch(resource, init);
          if (!res.ok) {
            throw new Error("An error occurred while fetching the data");
          }
          return res.json();
        },
      }}
    >
      <Toaster toastOptions={{ className: "toaster-con" }} />
      <div data-theme={selectedTheme}> {children}</div>
    </SWRConfig>
  );
};

export default ClientProviders;
