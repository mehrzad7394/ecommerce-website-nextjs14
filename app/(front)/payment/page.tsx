import React from "react";
import Form from "./Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Method",
};

const Payment = async () => {
  return <Form />;
};

export default Payment;
