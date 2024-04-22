import { Metadata } from "next";
import React from "react";
import MyOrders from "./MyOrders";
export const metadata: Metadata = {
  title: "Order History",
};

const OrderHistory = () => {
  return (
    <>
      <h2 className="text-2xl py-2">Order History</h2>
      <MyOrders />
    </>
  );
};

export default OrderHistory;
