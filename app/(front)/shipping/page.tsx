import { Metadata } from "next";
import React from "react";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Shipping Address",
};

const Shipping = async () => {
  return <Form />;
};

export default Shipping;
