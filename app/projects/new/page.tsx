"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, FileText, Calendar, Clock, Users, Wand2 } from "lucide-react";
import Link from "next/link";

// Template options for project input
const projectTemplates = [
  {
    id: "web-app",
    title: "Web アプリケーション開発",
    description: "新規ウェブアプリの開発計画。フロントエンドとバックエンドの実装、データベース設計を含む。",
    example: "新しい顧客管理システムを開発したい。ユーザー認証、顧客データの検索・追加・編集機能、レポート生成機能が必要。6か月以内にリリースしたい。5人程度の開発チームを想定。"
  },
  {
    id: "system-migration",
    title: "システム移行プロジェクト",
    description: "既存システムから新システムへの移行。データ移行、検証、トレーニングを含む。",
    example: "現在使用している在庫管理システムを新しいクラウドベースのシステムに移行したい。約10万件の商品データと過去3年分の取引履歴を移行する必要がある。ダウンタイムは最小限にしたい。移行期間は最大で3ヶ月を想定。"
  },
  {
    id: "mobile-app",
    title: "モバイルアプリ開発",
    description: "iOSおよびAndroid向けのモバイルアプリケーション開発。",
    example: "当社のEコマースサイト用のモバイルアプリを開発したい。商品閲覧、カート管理、注文処理、支払い機能が必要。iOS/Android両対応で、既存のAPIと連携する必要がある。4ヶ月でベータ版、6ヶ月で正式リリースを目指す。"
  },
  {
    id: "custom",
    title: "カスタムプロジェクト",
    description: "独自のプロジェクト定義を作成。",
    example: ""
  },
];

// Mock function to simulate LLM processing
const mockProcessNaturalLanguage = (input: string) => {
  // In a real implementation, this would call an LLM API
  return new Promise<{
    title: string;
    overview: string;
    goals: string[];
    timeline: Array<{ name: string; duration: string; start: string; end: string }>;
    resources: Array<{ role: string; count: number }>;
    risks: string[];
  }>((resolve) => {
    setTimeout(() => {
      resolve({
        title: input.split('.')[0] || "新規プロジェクト",
        overview: input,
        goals: [
          "機能要件の完全実装",
          "スケジュール通りの納品",
          "品質基準の達成",
          "ユーザー満足度の向上"
        ],
        timeline: [
          { name: "要件定義", duration: "2週間", start: "2025/01/01", end: "2025/01/15" },
          { name: "設計", duration: "3週間", start: "2025/01/16", end: "2025/02/05" },
          { name: "開発", duration: "8週間", start: "2025/02/06", end: "2025/04/02" },
          { name: "テスト", duration: "3週間", start: "2025/04/03", end: "2025/04/23" },
          { name: "デプロイ", duration: "1週間", start: "2025/04/24", end: "2025/04/30" }
        ],
        resources: [
          { role: "プロジェクトマネージャー", count: 1 },
          { role: "シニア開発者", count: 2 },
          { role: "開発者", count: 3 },
          { role: "QAエンジニア", count: 2 },
          { role: "UIデザイナー", count: 1 }
        ],
        risks: [
          "要件の変更による遅延",
          "チームメンバーの離脱",
          "技術的な障害",
          "外部依存関係の遅延"
        ]
      });
    }, 1500);
  });
};

const NewProjectPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [projectInput, setProjectInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [projectPlan, setProjectPlan] = useState<{
    title: string;
    overview: string;
    goals: string[];
    timeline: Array<{ name: string; duration: string; start: string; end: string }>;
    resources: Array<{ role: string; count: number }>;
    risks: string[];
  } | null>(null);
  const [currentStep, setCurrentStep] = useState<"template" | "input" | "result">("template");

  const handleTemplateSelect = (templateId: string) => {
    const template = projectTemplates.find(t => t.id === templateId);
    setSelectedTemplate(templateId);
    if (template && template.example) {
      setProjectInput(template.example);
    }
    setCurrentStep("input");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectInput(e.target.value);
  };

  const handleProcessInput = async () => {
    if (!projectInput.trim()) return;

    setIsProcessing(true);
    try {
      const result = await mockProcessNaturalLanguage(projectInput);
      setProjectPlan(result);
      setCurrentStep("result");
    } catch (error) {
      console.error("処理中にエラーが発生しました", error);
      // エラー処理をここに追加
    } finally {
      setIsProcessing(false);
    }
  };

  const handleEditInput = () => {
    setCurrentStep("input");
  };

  const handleSavePlan = () => {
    // In a real application, this would save the project to a database
    alert("プロジェクト計画が保存されました（デモ用）");
    // Redirect to project list or dashboard
    window.location.href = "/projects";
  };

  const renderTemplateSelection = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">テンプレートを選択</h2>
        <p className="text-slate-600">プロジェクトタイプに最適なテンプレートを選んでください。</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        {projectTemplates.map((template) => (
          <Card 
            key={template.id} 
            className={`cursor-pointer hover:border-blue-400 transition-colors ${
              selectedTemplate === template.id ? 'border-blue-500 ring-2 ring-blue-200' : ''
            }`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{template.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderInputForm = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">プロジェクト詳細を入力</h2>
        <p className="text-slate-600">自然な言葉でプロジェクトについて説明してください。目的、目標、予算、タイムライン、必要なリソースなどの情報を含めると、より詳細な計画が生成されます。</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <textarea
            className="w-full min-h-[200px] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="例: 新しい顧客管理システムを開発したい。ユーザー認証、顧客データの管理、レポート生成機能が必要。6か月以内にリリースしたい。5人程度の開発チームを想定。"
            value={projectInput}
            onChange={handleInputChange}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep("template")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> テンプレート選択に戻る
          </Button>
          <Button 
            onClick={handleProcessInput} 
            disabled={isProcessing || !projectInput.trim()}
          >
            {isProcessing ? (
              <>処理中...</>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" /> プロジェクト計画を生成
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  const renderResultView = () => {
    if (!projectPlan) return null;
    
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">プロジェクト計画</h2>
          <p className="text-slate-600">AI によって生成されたプロジェクト計画です。内容を確認し、必要に応じて編集してください。</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{projectPlan.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" /> 概要
              </h3>
              <p className="mt-2 text-slate-600">{projectPlan.overview}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">目標</h3>
              <ul className="mt-2 space-y-1">
                {projectPlan.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-500" /> タイムライン
              </h3>
              <div className="mt-4 relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                <div className="space-y-4">
                  {projectPlan.timeline.map((phase, index: number) => (
                    <div key={index} className="ml-10 relative">
                      <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-500"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h4 className="font-medium">{phase.name}</h4>
                          <p className="text-sm text-slate-500">{phase.duration}</p>
                        </div>
                        <div className="text-sm text-slate-500">
                          {phase.start} 〜 {phase.end}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-500" /> リソース計画
              </h3>
              <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectPlan.resources.map((resource, index: number) => (
                  <div key={index} className="border rounded-md p-3 flex justify-between">
                    <div>{resource.role}</div>
                    <div className="font-medium">{resource.count}名</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-500" /> リスク評価
              </h3>
              <ul className="mt-2 space-y-1">
                {projectPlan.risks.map((risk: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-amber-500">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handleEditInput}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> 入力を編集
            </Button>
            <Button onClick={handleSavePlan}>
              <ArrowRight className="mr-2 h-4 w-4" /> 計画を保存
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">新規プロジェクト計画</h1>
          <p className="text-slate-600">
            自然言語でプロジェクトの概要を入力し、最適な計画を作成します。
          </p>
        </div>
        <Link href="/projects">
          <Button variant="outline">キャンセル</Button>
        </Link>
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
          currentStep === "template" ? "border-blue-500 bg-blue-50 text-blue-500" : "border-slate-200 bg-white text-slate-500"
        }`}>
          1
        </div>
        <div className={`h-1 w-16 ${
          currentStep === "template" ? "bg-slate-200" : "bg-blue-500"
        }`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
          currentStep === "input" ? "border-blue-500 bg-blue-50 text-blue-500" : currentStep === "result" ? "border-blue-500 bg-blue-50 text-blue-500" : "border-slate-200 bg-white text-slate-500"
        }`}>
          2
        </div>
        <div className={`h-1 w-16 ${
          currentStep === "result" ? "bg-blue-500" : "bg-slate-200"
        }`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
          currentStep === "result" ? "border-blue-500 bg-blue-50 text-blue-500" : "border-slate-200 bg-white text-slate-500"
        }`}>
          3
        </div>
      </div>

      {currentStep === "template" && renderTemplateSelection()}
      {currentStep === "input" && renderInputForm()}
      {currentStep === "result" && renderResultView()}
    </div>
  );
};

export default NewProjectPage;