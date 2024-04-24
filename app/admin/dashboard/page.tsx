import React from "react";
import Dashboard from "./Dashboard";
import AdminLayout from "@/components/admin/AdminLayout";
export const metadata = {
  title: "Admin Dashboard",
};
const DashboardPage = () => {
  return (
    <AdminLayout activeItem="dashboard">
      <Dashboard />
    </AdminLayout>
  );
};

export default DashboardPage;
