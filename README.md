# 다오랩 브랜드북

다오랩이 **무엇을 믿고, 어디로 가고, 어떻게 일하는지** 적은 문서입니다.
철학, 비전, 미션, 핵심가치, 선언문, 스토리, 핵심 메시지로 이루어져 있습니다.

- 웹: https://brandbook.daolab.kr
- 운영 방식은 [다오랩 핸드북](https://handbook.daolab.kr)에 있습니다. 브랜드북은 "왜"를, 핸드북은 "어떻게"를 적습니다.

> v0.1 (2026-11-25). 모든 장의 첫 초안입니다.

## 고치는 법

웹에서 읽다가 고칠 곳이 보이면 페이지 위쪽 **이 페이지 고치기**를 누르세요.
GitHub에서 그 파일이 열립니다.

1. 내용을 고치고, 무엇을 왜 바꿨는지 한 줄로 적습니다.
2. 저장소 쓰기 권한이 없으면 GitHub가 자동으로 포크를 만들고 **풀 리퀘스트(PR)** 를 열어 줍니다.
3. 비전·미션·핵심가치·선언문을 바꾸는 PR은 디스코드에 먼저 알려 주세요.

자세한 원칙은 [content/contributing.md](content/contributing.md)에 있습니다.

## 쓰는 원칙

- 근거가 있는 것을 씁니다. 출처는 [content/sources.md](content/sources.md)에 밝힙니다.
- **개인 이름, 닉네임, 연락처, 얼굴 사진은 싣지 않습니다.** 인용은 '설립자 인터뷰', '3조 조원 기록'처럼 역할이나 조 단위로만.
  이 저장소는 공개되어 있어서, 커밋 기록에 남은 글은 지워도 기록에서 찾을 수 있습니다.
- 이메일·전화번호·이미지가 원고에 들어가면 build가 멈춥니다.

## 구조

```
content/
  SUMMARY.md        목차. 이 목록의 순서가 곧 장 번호이고, 목록에 있는 파일만 페이지가 됩니다.
  README.md         1. 들어가며
  philosophy/       2. 철학
  vision.md         3. 비전
  mission.md        4. 미션
  values/           5. 핵심가치 (태도 1 + 원칙 5)
  manifesto.md      6. 선언문
  story/            7. 스토리
  messages/         8. 핵심 메시지
  sources.md        9. 출처와 만든 과정
src/                웹으로 보여 주는 코드 (Next.js, 다오랩 핸드북과 같은 코드)
public/CNAME        GitHub Pages 도메인
```

새 페이지를 더하려면 `content/` 에 마크다운 파일을 만들고 `SUMMARY.md` 에 한 줄을 더하면 됩니다.
들여쓰기 두 칸이 한 단계이고, 3단계까지 씁니다.

```md
- [핵심가치](values/README.md)
  - [새 페이지 제목](values/new-page.md)   ← 공백 두 칸 들여쓰기
```

마크다운 주의:

- 본문의 물결표 `~` 는 `\~` 로 씁니다 (두 개가 겹치면 취소선이 됩니다). 목차 제목에는 `–` 를 씁니다.
- 굵게 뒤에 조사가 오면 따옴표를 굵게 안에 넣습니다: `'**굵게**'는` (O), `**'굵게'**는` (X).

## 내 컴퓨터에서 보기

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 에 정적 사이트를 만듭니다. 목차에 있는데 파일이 없으면 여기서 멈춥니다
```

## 배포

`main` 에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 lint와 build를 거쳐 GitHub Pages에 올립니다.

## 라이선스

아직 정하지 않았습니다.
