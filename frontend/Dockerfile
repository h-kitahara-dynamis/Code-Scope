# ベースイメージとしてNode.jsを使用
FROM node:14

# アプリケーションディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# npmのキャッシュをクリアし、依存関係をインストール
RUN npm cache clean --force
# 毎回削除する必要があるか微妙
RUN rm -rf node_modules && npm install
# これ毎回installするんだっけ？
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install react-router-dom

# アプリケーションのソースをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# 開発サーバーを起動
CMD ["npm", "start"]

# コンテナ外部に3000ポートを公開
EXPOSE 3000