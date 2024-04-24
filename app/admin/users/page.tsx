import AdminLayout from "@/components/admin/AdminLayout";
import React from "react";
import Users from "./Users";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Admin Users",
  };
const AdminUsersPage = () => {
  return (
    <AdminLayout activeItem="users">
      <Users />
    </AdminLayout>
  );
};

export default AdminUsersPage;
