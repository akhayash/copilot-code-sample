# Azure OpenAI Integration

このプロジェクトではAzure OpenAIを使用してプロジェクト計画の自動生成機能を実装しています。

## 設定方法

1. Azure OpenAIリソースを作成し、デプロイメントを設定します。
   - [Azure OpenAI Service](https://azure.microsoft.com/ja-jp/products/cognitive-services/openai-service/)にアクセスしてリソースを作成
   - 以下のいずれかのモデルをデプロイ:
     - gpt-35-turbo
     - gpt-4
     - gpt-4-turbo

2. 必要な環境変数を設定します。`.env.local.example`ファイルを`.env.local`にコピーして、以下の情報を入力してください:
   ```
   AZURE_OPENAI_API_KEY=your-azure-openai-api-key
   AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
   AZURE_OPENAI_API_VERSION=2023-05-15
   AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
   ```

3. アプリケーションを再起動して設定を適用します:
   ```
   npm run dev
   ```

## 使用方法

1. 「新規プロジェクト計画」ページにアクセスします
2. プロジェクトテンプレートを選択
3. プロジェクトの詳細を自然言語で入力
4. 「プロジェクト計画を生成」ボタンをクリックして、Azure OpenAI APIを使用してプロジェクト計画を生成
5. 生成された計画を確認し、必要に応じて保存

## トラブルシューティング

- 「プロジェクト計画の生成中にエラーが発生しました」というエラーが表示された場合:
  - 環境変数が正しく設定されているか確認
  - Azure OpenAIリソースとデプロイメントが正しく設定されているか確認
  - ブラウザのコンソールで詳細なエラーメッセージを確認

- 応答時間が遅い場合:
  - Azure OpenAIリソースのリージョンが遠い可能性があります
  - トラフィックが多い時間帯にアクセスしている可能性があります