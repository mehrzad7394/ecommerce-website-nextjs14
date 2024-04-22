import React from "react";
import OrderDetails from "./OrderDetails";

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Order ${params.id}`,
  };
}

const OrderDetailsPage = ({ params }: { params: { id: string } }) => {
  return <OrderDetails orderId={params.id} />;
};

export default OrderDetailsPage;
