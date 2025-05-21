"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyWeb, setNotifyWeb] = useState(true);
  const [notifyMobile, setNotifyMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ja");
  const [timezone, setTimezone] = useState("Asia/Tokyo");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">設定</h1>
        <p className="text-slate-600">
          アプリケーションのシステム設定を行います。
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>アカウント設定</CardTitle>
            <CardDescription>
              アカウントに関する基本設定を管理します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                表示名
              </label>
              <input
                id="name"
                type="text"
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                defaultValue="田中 太郎"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                defaultValue="tanaka@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="position" className="text-sm font-medium">
                役職
              </label>
              <input
                id="position"
                type="text"
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                defaultValue="プロジェクトマネージャー"
              />
            </div>

            <Button>保存する</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>通知設定</CardTitle>
            <CardDescription>
              通知の受け取り方法を設定します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="email-notifications" className="font-medium">
                  メール通知
                </label>
                <p className="text-sm text-slate-500">
                  重要な更新をメールで受け取る
                </p>
              </div>
              <div className="relative">
                <input
                  id="email-notifications"
                  type="checkbox"
                  className="peer sr-only"
                  checked={notifyEmail}
                  onChange={() => setNotifyEmail(!notifyEmail)}
                />
                <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-blue-500"></div>
                <div className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${notifyEmail ? 'translate-x-5' : ''}`}></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="web-notifications" className="font-medium">
                  Web通知
                </label>
                <p className="text-sm text-slate-500">
                  ブラウザ上で通知を受け取る
                </p>
              </div>
              <div className="relative">
                <input
                  id="web-notifications"
                  type="checkbox"
                  className="peer sr-only"
                  checked={notifyWeb}
                  onChange={() => setNotifyWeb(!notifyWeb)}
                />
                <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-blue-500"></div>
                <div className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${notifyWeb ? 'translate-x-5' : ''}`}></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="mobile-notifications" className="font-medium">
                  モバイル通知
                </label>
                <p className="text-sm text-slate-500">
                  モバイルアプリで通知を受け取る
                </p>
              </div>
              <div className="relative">
                <input
                  id="mobile-notifications"
                  type="checkbox"
                  className="peer sr-only"
                  checked={notifyMobile}
                  onChange={() => setNotifyMobile(!notifyMobile)}
                />
                <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-blue-500"></div>
                <div className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${notifyMobile ? 'translate-x-5' : ''}`}></div>
              </div>
            </div>

            <Button>保存する</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>表示設定</CardTitle>
            <CardDescription>
              アプリケーションの表示に関する設定を行います。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="dark-mode" className="font-medium">
                  ダークモード
                </label>
                <p className="text-sm text-slate-500">
                  暗い配色テーマを使用する
                </p>
              </div>
              <div className="relative">
                <input
                  id="dark-mode"
                  type="checkbox"
                  className="peer sr-only"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-blue-500"></div>
                <div className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition ${darkMode ? 'translate-x-5' : ''}`}></div>
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="language" className="text-sm font-medium">
                言語
              </label>
              <select
                id="language"
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="ja">日本語</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="ko">한국어</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="timezone" className="text-sm font-medium">
                タイムゾーン
              </label>
              <select
                id="timezone"
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              >
                <option value="Asia/Tokyo">アジア/東京 (GMT+9)</option>
                <option value="America/Los_Angeles">アメリカ/ロサンゼルス (GMT-7)</option>
                <option value="Europe/London">ヨーロッパ/ロンドン (GMT+1)</option>
                <option value="Asia/Singapore">アジア/シンガポール (GMT+8)</option>
              </select>
            </div>

            <Button>保存する</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;