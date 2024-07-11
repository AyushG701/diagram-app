"use client";

import { api } from "@/convex/_generated/api";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import SideNav from "./_components/SideNav";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    if (!result?.length) {
      router.push(`/teams/create/`);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="bg-white h-screen w-72 fixed">
          <SideNav />
        </div>
        <div className="col-span-4 ml-72">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
