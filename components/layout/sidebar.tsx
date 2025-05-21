"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, FileText, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarNavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: SidebarNavItem[] = [
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "プロジェクト",
    href: "/projects",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "ユーザー",
    href: "/users",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "設定",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r border-slate-200 md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <nav className="grid gap-1 px-2 py-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;