import AdminLayout from "@/components/admin/AdminLayout";
import React from "react";
import Products from "./Products";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Admin Products",
  };
const AdminProductPage = () => {
  return (
    <AdminLayout activeItem="products">
      <Products />
    </AdminLayout>
  );
};

export default AdminProductPage;
