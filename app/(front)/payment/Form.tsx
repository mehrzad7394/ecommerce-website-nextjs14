"use client";
import CheckoutSteps from "@/components/CheckoutSteps";
import data from "@/lib/data";
import useCartService from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const { shippingAddress, savePaymentMethod, paymentMethod } =
    useCartService();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    router.push("/place-order");
  };
  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "paypal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingAddress.address]);

  return (
    <div>
      <CheckoutSteps current={2} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4">
        <div className="card-body">
          <h1 className="card-title">Payment Method</h1>
          <form onSubmit={handleSubmit}>
            {data?.paymentTypes.map((type, index) => (
              <div key={type}>
                <label className="label cursor-pointer">
                  <span className="label-text">{type}</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="radio"
                    value={type}
                    checked={selectedPaymentMethod === type}
                    onChange={() => setSelectedPaymentMethod(type)}
                  />
                </label>
              </div>
            ))}
            <div className="my-2">
              <button type="submit" className="btn btn-primary w-full">
                Next
              </button>
            </div>
            <div className="my-2">
              <button className="btn w-full my-2" onClick={() => router.back()}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
