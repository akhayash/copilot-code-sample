This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI/CD 環境

このプロジェクトは、GitHub ActionsとAzure Static Web Appsを使用した自動CI/CDワークフローで、以下の2つの環境が設定されています：

- **本番環境（mainブランチ）**: [https://thankful-meadow-05eade300.6.azurestaticapps.net](https://thankful-meadow-05eade300.6.azurestaticapps.net)
- **開発環境（main以外のブランチ）**: [https://white-wave-0cdad0c00.6.azurestaticapps.net](https://white-wave-0cdad0c00.6.azurestaticapps.net)

GitHub Actionsワークフローは以下のように自動的にデプロイします：
- main以外のブランチへの変更は開発環境へ
- mainブランチにマージされた変更は本番環境へ

この設定により、変更を本番環境にマージする前に開発環境でレビューとテストを行うことができます。

## Deploy on Azure Static Web Apps

このNext.jsアプリケーションは、[Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)にデプロイするように設定されています。GitHub Actionsワークフローを使用して、開発環境と本番環境の2つの環境にデプロイができます。
Azure Static Web AppsはNext.jsアプリケーションのホスティングに最適で、Azure Functionsと統合してサーバーレス機能を提供します。

詳細については、[Azure Static Web Appsのドキュメント](https://docs.microsoft.com/azure/static-web-apps/)および[Next.jsのデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。
