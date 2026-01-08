// app/dashboard/nav-link.tsx
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <Link
      style={{ color: pathname === "/dashboard/customers" ? "#333" : "#999" }}
      href="/dashboard/customers"
    >
      Customers
    </Link>
  );
}
