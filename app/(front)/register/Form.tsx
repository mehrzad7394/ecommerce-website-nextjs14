"use client";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

const Form = () => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get("callbackUrl") || "/";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });
  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, router, session, params]);
  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { name, email, password } = form;
    try {
      const res = await fetch("/api/auth/register", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        return router.push(
          `/signin?callbackUrl=${callbackUrl}&success=Account has been created`
        );
      } else {
        const data = await res.json();
        throw new Error(data?.message ?? "Server error");
      }
    } catch (error: any) {
      toast.error(error.message || "error");
    }
  };

  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Register</h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required.",
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.name?.message && (
              <div className="text-error">{errors.name.message}</div>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="input input-bordered w-full max-w-sm"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email?.message && (
              <div className="text-error">{errors.email.message}</div>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full max-w-sm"
              {...register("password", {
                required: "password is required",
              })}
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="confirmedPassword" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmedPassword"
              className="input input-bordered w-full max-w-sm"
              {...register("confirmedPassword", {
                required: "confirm Password is required",
                validate: (value) => {
                  const { password } = getValues();
                  return value === password || "The passwords do not match";
                },
              })}
            />
            {errors.confirmedPassword?.message && (
              <div className="text-error">
                {errors.confirmedPassword.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
