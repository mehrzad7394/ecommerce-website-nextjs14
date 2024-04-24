import React from "react";
import Orders from "./Orders";
import AdminLayout from "@/components/admin/AdminLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Orders",
};
const OrderPage = async () => {
  return (
    <AdminLayout activeItem="orders">
      <Orders />
    </AdminLayout>
  );
};

export default OrderPage;
