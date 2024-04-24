import AdminLayout from "@/components/admin/AdminLayout";
import React from "react";
import Form from "./Form";

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Edit Product ${params.id}`,
  };
}

const OrderHistory = async ({ params }: { params: { id: string } }) => {
  return (
    <AdminLayout activeItem="products">
      <Form productId={params.id} />
    </AdminLayout>
  );
};

export default OrderHistory;
