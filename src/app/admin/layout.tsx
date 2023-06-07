"use client";

import { AdminNav } from "@/components/common/AdminNav";
import React from "react";

import {
  AiOutlineContainer,
  AiOutlineDashboard,
  AiOutlineMail,
  AiOutlineTeam,
} from "react-icons/ai";

const navItems = [
  { href: "/admin", icon: AiOutlineDashboard, label: "Dashboard" },
  { href: "/admin/posts", icon: AiOutlineContainer, label: "Posts" },
  { href: "/admin/users", icon: AiOutlineTeam, label: "Users" },
  { href: "/admin/comments", icon: AiOutlineMail, label: "Comments" },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <AdminNav navItems={navItems}></AdminNav>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
