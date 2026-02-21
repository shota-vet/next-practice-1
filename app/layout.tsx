import "ress/ress.css";
import "./globals.css";
import { Header } from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

// nextはファイル配置構成自体にURL構成の役割を付随させていて、reactのrooting作業を省略している感じ（File-based routing）
// {children} は 今のURLに一致した page.tsx を Nextが自動で差し込む、今のURL判定は Next内部Routerがやってる（ブラウザのURLを元に）
// React.ReactNodeはReact本体が持っている型
// 意味：「画面に表示可能なもの全部」JSX、文字列、数字、Fragment、配列、null

// layoutにhtmlを書く理由
// App.tsx がないのでlayoutに<html lang="ja">とかも書く
// React(Vite)ではindex.html が外側、Reactが中身
// Nextではlayout.tsx が外側、page.tsx が中身。つまり layout はHTMLの body より外側の役割
