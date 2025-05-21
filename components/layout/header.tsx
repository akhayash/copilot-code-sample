"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Menu, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-slate-900">ProjectFlow</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              ダッシュボード
            </Link>
            <Link href="/projects" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              プロジェクト
            </Link>
            <Link href="/users" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              ユーザー
            </Link>
            <Link href="/settings" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              設定
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="search"
              placeholder="検索..."
              className="w-64 rounded-md border border-slate-200 bg-white pl-8 pr-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            aria-label="通知"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600"></span>
          </Button>

          <Avatar>
            <AvatarImage src="/avatar.png" alt="ユーザー" />
            <AvatarFallback>ユ</AvatarFallback>
          </Avatar>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col px-4 py-2">
            <Link 
              href="/dashboard" 
              className="py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              onClick={toggleMobileMenu}
            >
              ダッシュボード
            </Link>
            <Link 
              href="/projects" 
              className="py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              onClick={toggleMobileMenu}
            >
              プロジェクト
            </Link>
            <Link 
              href="/users"
              className="py-2 text-sm font-medium text-slate-700 hover:text-slate-900" 
              onClick={toggleMobileMenu}
            >
              ユーザー
            </Link>
            <Link 
              href="/settings" 
              className="py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
              onClick={toggleMobileMenu}
            >
              設定
            </Link>
            <div className="relative my-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="search"
                placeholder="検索..."
                className="w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;