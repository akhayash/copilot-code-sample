"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, MoreHorizontal, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Sample user data
const users = [
  {
    id: 1,
    name: "田中 太郎",
    email: "tanaka@example.com",
    position: "プロジェクトマネージャー",
    status: "オンライン",
    avatar: "",
    projects: 6,
    tasks: 12,
  },
  {
    id: 2,
    name: "佐藤 花子",
    email: "sato@example.com",
    position: "UI/UXデザイナー",
    status: "オフライン",
    avatar: "",
    projects: 4,
    tasks: 8,
  },
  {
    id: 3,
    name: "鈴木 一郎",
    email: "suzuki@example.com",
    position: "フロントエンド開発者",
    status: "オンライン",
    avatar: "",
    projects: 5,
    tasks: 15,
  },
  {
    id: 4,
    name: "山田 春子",
    email: "yamada@example.com",
    position: "バックエンド開発者",
    status: "オフライン",
    avatar: "",
    projects: 3,
    tasks: 7,
  },
  {
    id: 5,
    name: "伊藤 哲夫",
    email: "ito@example.com",
    position: "QAエンジニア",
    status: "オンライン",
    avatar: "",
    projects: 2,
    tasks: 9,
  },
  {
    id: 6,
    name: "中村 七恵",
    email: "nakamura@example.com",
    position: "プロダクトオーナー",
    status: "オフライン",
    avatar: "",
    projects: 8,
    tasks: 5,
  },
];

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ユーザー</h1>
          <p className="text-slate-600">
            システムに登録されているユーザー一覧と詳細情報です。
          </p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          ユーザー追加
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
        <input
          type="search"
          placeholder="ユーザー名、メールアドレス、役職で検索..."
          className="w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-base">{user.name}</h3>
                    <p className="text-sm text-slate-500">{user.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      user.status === "オンライン" ? "bg-green-500" : "bg-slate-300"
                    }`}
                  ></span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="text-slate-500">メール:</span> {user.email}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex flex-col bg-slate-50 p-2 rounded-md">
                    <span className="text-xs text-slate-500">プロジェクト</span>
                    <span className="font-medium">{user.projects}</span>
                  </div>
                  <div className="flex flex-col bg-slate-50 p-2 rounded-md">
                    <span className="text-xs text-slate-500">タスク</span>
                    <span className="font-medium">{user.tasks}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;