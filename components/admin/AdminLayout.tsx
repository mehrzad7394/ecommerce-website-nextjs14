import { auth } from "@/lib/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";

const AdminLayout = async ({
  activeItem = "dashboard",
  children,
}: {
  activeItem: string;
  children: ReactNode;
}) => {
  const session = await auth();
  if (!session || !session.user.isAdmin) {
    return (
      <div className="relative flex flex-grow p-4">
        <div>
          <h1 className="text-2xl">Unauthorized</h1>
          <p>Admin permisson required</p>
        </div>
      </div>
    );
  }
  return (
    <main className="flex-grow flex relative    mt-[60px]">
      <div className="w-full grid md:grid-cols-5">
        <div className="bg-base-200">
          <ul className="menu">
            <li>
              <Link
                className={"dashboard" === activeItem ? "active" : ""}
                href="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className={"orders" === activeItem ? "active" : ""}
                href="/admin/orders"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                className={"products" === activeItem ? "active" : ""}
                href="/admin/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={"users" === activeItem ? "active" : ""}
                href="/admin/users"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 px-4">{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
