import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages에 올리는 정적 사이트로 내보냅니다 (out/).
  output: "export",
  // /story/ → story/index.html 로 만들어야 GitHub Pages가 주소를 그대로 찾습니다.
  trailingSlash: true,
  // 상위 폴더에 lockfile이 있어도 이 디렉터리를 루트로 잡습니다.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
