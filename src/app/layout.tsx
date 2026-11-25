import type { Metadata, Viewport } from "next";
import { HandbookShell } from "@/components/HandbookShell";
import { getHandbookNav, getHandbookTitle } from "@/lib/handbook";
import "./handbook.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandbook.daolab.kr"),
  title: { default: getHandbookTitle(), template: `%s · ${getHandbookTitle()}` },
  description:
    "다오랩이 무엇을 믿고 어디로 가는지 적은 문서. 철학, 비전, 미션, 핵심가치, 선언문, 스토리, 핵심 메시지.",
  // 외부 공개 여부를 정하기 전까지는 검색에 내보내지 않습니다.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <HandbookShell title={getHandbookTitle()} nav={getHandbookNav()}>
          {children}
        </HandbookShell>
      </body>
    </html>
  );
}
