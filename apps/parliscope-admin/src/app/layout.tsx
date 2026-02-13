import type { Metadata } from "next";
import "./globals.css";
import { AdminSidebar } from "./admin-sidebar";

export const metadata: Metadata = {
  title: "ParliScope Admin - 管理画面",
  description: "ParliScope管理画面 - 法案データ・議論の管理",
};

const navItems = [
  { href: "/", label: "ダッシュボード", icon: "grid" },
  { href: "/bills", label: "法案管理", icon: "file" },
  { href: "/sessions", label: "会期管理", icon: "calendar" },
  { href: "/discussions", label: "議論管理", icon: "message" },
  { href: "/settings", label: "設定", icon: "settings" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-admin-bg text-admin-text antialiased">
        <div className="flex">
          <AdminSidebar
            brandName="ParliScope"
            brandColorClass="text-purple-400"
            navItems={navItems}
          />
          <main className="flex-1 min-h-screen ml-64">
            <div className="px-8 py-8 max-w-7xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
