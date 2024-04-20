"use client";
import CheckoutSteps from "@/components/CheckoutSteps";
import useCartService from "@/lib/hooks/useCartStore";
import { ShippingAddress } from "@/lib/models/OrderModel";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, ValidationRule, useForm } from "react-hook-form";

const Form = () => {
  const router = useRouter();
  const { saveShippingAddress, shippingAddress } = useCartService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ShippingAddress>({
    defaultValues: {
      address: "",
      city: "",
      country: "",
      fullName: "",
      postalCode: "",
    },
  });
  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("city", shippingAddress.city);
    setValue("country", shippingAddress.country);
    setValue("address", shippingAddress.address);
    setValue("postalCode", shippingAddress.postalCode);
  }, [setValue, shippingAddress]);

  const formSubmit: SubmitHandler<ShippingAddress> = async (form) => {
    saveShippingAddress(form);
    router.push("/payment");
  };
  const FormInput = ({
    id,
    name,
    required,
    pattern,
  }: {
    id: keyof ShippingAddress;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  }) => (
    <div className="mb-2">
      <label htmlFor={id} className="label">
        {name}
      </label>
      <input
        type="text"
        id={id}
        {...register(id, {
          required: required && `${name} is required`,
          pattern,
        })}
        className="input input-bordered w-full max-w-sm"
      />
      {errors[id]?.message && (
        <div className="text-error">{errors[id]?.message}</div>
      )}
    </div>
  );
  return (
    <div>
      <CheckoutSteps current={1} />
      <div className="max-w-sm mx-auto card bg-base-300 my-4">
        <div className="card-body">
          <h1 className="card-title">Shipping Address</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <FormInput name="Full name" id="fullName" required />
            <FormInput name="address" id="address" required />
            <FormInput name="city" id="city" required />
            <FormInput name="postalCode" id="postalCode" required />
            <FormInput name="country" id="country" required />
            <div className="my-2">
              <button
                className="btn btn-primary w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
