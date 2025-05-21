"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">ProjectFlow</h3>
            <p className="mt-2 text-sm text-slate-600">
              モダンでプロフェッショナルなプロジェクト管理ツール。
              チームの生産性を向上させるための最適なソリューションです。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">製品</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  機能
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  ロードマップ
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  アップデート
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">リソース</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  ドキュメント
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  ガイド
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  サポート
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">会社情報</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  採用情報
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-slate-600 hover:text-slate-900"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} ProjectFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;