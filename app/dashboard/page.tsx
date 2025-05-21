"use client";

import { BarChart, Clock, FileText, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">ダッシュボード</h1>
        <p className="text-slate-600">
          あなたのプロジェクトとタスクの概要を確認してください。
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              進行中のプロジェクト
            </CardTitle>
            <FileText className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-slate-500">前月比 +2.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">完了タスク</CardTitle>
            <Clock className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/36</div>
            <p className="text-xs text-slate-500">進捗率 67%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">アクティブユーザー</CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-500">前週比 +4.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">リソース使用量</CardTitle>
            <BarChart className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">64%</div>
            <p className="text-xs text-slate-500">最適化されています</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>プロジェクト進捗</CardTitle>
            <CardDescription>直近のプロジェクト完了状況</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for a chart component */}
              <div className="h-80 rounded-md bg-slate-100 w-full flex items-center justify-center">
                <p className="text-slate-500">プロジェクト進捗チャート</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>最近のアクティビティ</CardTitle>
            <CardDescription>直近の更新</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm font-medium">田中さんが「UI設計」タスクを完了しました</p>
                <p className="text-xs text-slate-500">2時間前</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm font-medium">佐藤さんが「API統合」プロジェクトにコメントしました</p>
                <p className="text-xs text-slate-500">4時間前</p>
              </div>
              <div className="border-b pb-4">
                <p className="text-sm font-medium">新しいプロジェクト「モバイルアプリv2」が作成されました</p>
                <p className="text-xs text-slate-500">昨日</p>
              </div>
              <div className="pb-2">
                <p className="text-sm font-medium">鈴木さんが「テストケース作成」タスクを開始しました</p>
                <p className="text-xs text-slate-500">昨日</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;