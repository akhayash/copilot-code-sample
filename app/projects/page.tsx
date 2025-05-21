"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Sample project data
const sampleProjects = [
  {
    id: 1,
    name: "E-コマースプラットフォーム刷新",
    status: "進行中",
    progress: 65,
    members: 4,
    deadline: "2025-12-15",
    description: "既存のECサイトの完全リニューアル案件。モダンなUIとパフォーマンス最適化が目標。",
  },
  {
    id: 2,
    name: "モバイルアプリv2開発",
    status: "計画中",
    progress: 10,
    members: 6,
    deadline: "2026-03-01",
    description: "現行モバイルアプリの大規模アップデート。新機能とUI改善を含む。",
  },
  {
    id: 3,
    name: "APIインテグレーション",
    status: "進行中",
    progress: 32,
    members: 3,
    deadline: "2025-09-20",
    description: "社内システム間のAPIによる連携強化。データの一元管理を実現。",
  },
  {
    id: 4,
    name: "新規顧客ポータル",
    status: "保留中",
    progress: 0,
    members: 5,
    deadline: "2026-01-10",
    description: "顧客向けセルフサービスポータル。ダッシュボードとデータ分析機能を提供。",
  },
  {
    id: 5,
    name: "データ分析ダッシュボード",
    status: "完了",
    progress: 100,
    members: 2,
    deadline: "2025-08-01",
    description: "社内利用の分析ダッシュボード。リアルタイムデータ可視化を実現。",
  },
  {
    id: 6,
    name: "レガシーシステム移行",
    status: "進行中",
    progress: 78,
    members: 8,
    deadline: "2025-10-30",
    description: "古いシステムから新プラットフォームへの完全移行。データ整合性を保持。",
  },
];

// Status colors for progress bars
const getStatusColor = (status: string) => {
  switch (status) {
    case "進行中":
      return "bg-blue-500";
    case "計画中":
      return "bg-purple-500";
    case "完了":
      return "bg-green-500";
    case "保留中":
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
};

// Status badge style
const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case "進行中":
      return "bg-blue-100 text-blue-800";
    case "計画中":
      return "bg-purple-100 text-purple-800";
    case "完了":
      return "bg-green-100 text-green-800";
    case "保留中":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(sampleProjects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredProjects(sampleProjects);
    } else {
      const filtered = sampleProjects.filter((project) => 
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.status.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">プロジェクト</h1>
          <p className="text-slate-600">
            現在進行中のプロジェクト一覧と詳細を確認できます。
          </p>
        </div>
        <Button className="sm:w-auto w-full">
          <Plus className="mr-2 h-4 w-4" />
          新規プロジェクト
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <input
            type="search"
            placeholder="プロジェクト名、説明で検索..."
            className="w-full rounded-md border border-slate-200 bg-white pl-8 pr-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Button variant="outline" className="sm:w-auto w-full">
          <Filter className="mr-2 h-4 w-4" />
          フィルター
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className={`h-1.5 ${getStatusColor(project.status)}`} style={{ width: `${project.progress}%` }}></div>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-sm text-slate-600">{project.description}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusBadgeStyle(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">進捗</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getStatusColor(project.status)}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="bg-slate-200 rounded-full h-6 w-6 flex items-center justify-center text-xs font-medium">
                      {project.members}
                    </div>
                    <span className="ml-2 text-slate-600">メンバー</span>
                  </div>
                  <div className="text-slate-600">
                    期限: <span className="font-medium">{new Date(project.deadline).toLocaleDateString("ja-JP")}</span>
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

export default ProjectsPage;