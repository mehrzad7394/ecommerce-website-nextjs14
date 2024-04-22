import React from "react";
import Form from "./Form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Place Order",
};

const PlaceOrder = async () => {
  return <Form />;
};

export default PlaceOrder;
