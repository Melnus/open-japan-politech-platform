import type { Metadata } from "next";
import "./globals.css";
import { AdminSidebar } from "./admin-sidebar";

export const metadata: Metadata = {
  title: "MoneyGlass Admin - 管理画面",
  description: "MoneyGlass管理画面 - 政治資金データの取り込み・管理",
};

const navItems = [
  { href: "/", label: "ダッシュボード", icon: "grid" },
  { href: "/import", label: "データ取り込み", icon: "upload" },
  { href: "/transactions", label: "取引一覧", icon: "list" },
  { href: "/reports", label: "報告書生成", icon: "file" },
  { href: "/settings", label: "設定", icon: "settings" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-admin-bg text-admin-text antialiased">
        <div className="flex">
          <AdminSidebar
            brandName="MoneyGlass"
            brandColorClass="text-blue-400"
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
