import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 作品一覧 → 作品詳細の画面遷移で、React の <ViewTransition> を使って画像をつなげる。
    // 非対応ブラウザでは今までどおり普通に切り替わる。
    viewTransition: true,
  },
};

export default nextConfig;
