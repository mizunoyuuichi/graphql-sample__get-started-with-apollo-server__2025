# ベースイメージ（Alpine ベースの Node.js）
FROM node:20-alpine

# 環境変数設定（オプション）
ENV NODE_ENV=production

# 作業ディレクトリ作成・設定
WORKDIR /app

# 依存ファイルを作成
# RUN npm init --yes

# 依存関係インストール（--frozen-lockfile や --omit=dev は状況で調整）
# RUN npm install apollo-server graphql

# 依存ファイルを先にコピー（キャッシュ活用）
COPY package*.json ./

# 依存関係インストール
RUN npm install

# アプリケーションコードのコピー
COPY . .

# tail コマンドが標準で入っていないことがあるため
RUN apk add --no-cache coreutils

# ポートを指定（必要に応じて）
EXPOSE 4000

# とりあえず落ちない対策 (検証時に)
#CMD ["sleep", "infinity"]

# 常駐プロセス
# CMD [ "tail", "-f", "/dev/null" ]

# アプリケーション起動 (常駐プロセス)
CMD ["node", "src/index3.js"]
