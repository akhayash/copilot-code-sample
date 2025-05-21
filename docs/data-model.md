# データモデル

## エンティティ関連図（ERD）

```mermaid
erDiagram
    USER ||--o{ PROJECT : "creates/owns"
    USER ||--o{ TEAM : "belongs to"
    TEAM ||--o{ PROJECT : "manages"
    PROJECT ||--o{ TASK : "contains"
    PROJECT ||--o{ MILESTONE : "has"
    PROJECT ||--o{ DOCUMENT : "has"
    TASK ||--o{ COMMENT : "has"
    TASK ||--o{ ATTACHMENT : "has"
    TASK }o--|| USER : "assigned to"
    TASK }o--|| TASK_STATUS : "has"
    TASK }o--|| MILESTONE : "belongs to"
    NOTIFICATION }o--|| USER : "sent to"
    NOTIFICATION }o--|| PROJECT : "related to"
    NOTIFICATION }o--|| TASK : "related to"
    
    USER {
        string id PK
        string email
        string passwordHash
        string name
        string role
        datetime createdAt
        datetime updatedAt
        json preferences
    }
    
    TEAM {
        string id PK
        string name
        string description
        datetime createdAt
        datetime updatedAt
        json settings
    }
    
    PROJECT {
        string id PK
        string name
        string description
        datetime startDate
        datetime endDate
        string status
        string ownerId FK
        string teamId FK
        json metadata
        datetime createdAt
        datetime updatedAt
    }
    
    TASK {
        string id PK
        string projectId FK
        string title
        string description
        datetime startDate
        datetime dueDate
        string priority
        string assigneeId FK
        string statusId FK
        string milestoneId FK
        json metadata
        datetime createdAt
        datetime updatedAt
    }
    
    TASK_STATUS {
        string id PK
        string name
        string color
        number order
        boolean isDefault
    }
    
    MILESTONE {
        string id PK
        string projectId FK
        string title
        string description
        datetime dueDate
        boolean completed
        datetime createdAt
        datetime updatedAt
    }
    
    COMMENT {
        string id PK
        string taskId FK
        string userId FK
        string content
        datetime createdAt
        datetime updatedAt
    }
    
    ATTACHMENT {
        string id PK
        string taskId FK
        string userId FK
        string fileName
        string fileType
        string fileUrl
        number fileSize
        datetime createdAt
    }
    
    DOCUMENT {
        string id PK
        string projectId FK
        string title
        string content
        string type
        datetime createdAt
        datetime updatedAt
    }
    
    NOTIFICATION {
        string id PK
        string userId FK
        string type
        string title
        string message
        boolean read
        string relatedProjectId FK
        string relatedTaskId FK
        datetime createdAt
    }
```

## データモデルの補足説明

### User（ユーザー）
- アプリケーションを利用するユーザーの情報
- ロールには管理者、プロジェクトマネージャー、メンバーなどが存在
- preferencesはユーザーの設定情報を格納するJSON形式のデータ

### Team（チーム）
- プロジェクトを管理するチームの情報
- ユーザーは複数のチームに所属可能
- settingsはチーム設定を格納するJSON形式のデータ

### Project（プロジェクト）
- プロジェクト情報の基本データ
- metadataには自然言語処理から抽出された追加情報を格納
- チームに紐づけられ、複数のタスクやマイルストーンを持つ

### Task（タスク）
- プロジェクト内の個別タスク
- 担当者、ステータス、優先度などの属性を持つ
- マイルストーンに紐づけることが可能
- metadataにはタスク固有の追加情報を格納

### Task_Status（タスクステータス）
- タスクのステータスを定義するマスターデータ
- 「未着手」「進行中」「レビュー中」「完了」などの状態を管理
- カスタムステータスの追加も可能

### Milestone（マイルストーン）
- プロジェクト内の重要な節目や期限を管理
- 複数のタスクをまとめる目標として利用

### Comment（コメント）
- タスクに対するコメント情報
- ユーザー間のコミュニケーションを記録

### Attachment（添付ファイル）
- タスクに添付されたファイル情報
- ファイル実体は外部ストレージに保存し、URLを参照

### Document（ドキュメント）
- プロジェクトに関連する文書情報
- 仕様書、議事録、メモなどを管理

### Notification（通知）
- ユーザーへの通知情報
- タスク期限、ステータス変更、メンション等の通知を管理