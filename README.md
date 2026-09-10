# Soyoung Park — Academic homepage

별도 빌드 없이 동작하는 정적 다중 페이지 홈페이지입니다. 논문 그림 확대 창은 작은 JavaScript 파일을 사용합니다.

## 페이지

- `index.html`: About, 소개와 연구 관심사, 연락처
- `publications.html`: 연도별 국제/국내 논문과 대표 썸네일
- `background.html`: 연구 경력, 학력, 산업 경력, 수상, 발표, 튜터링, 기술
- `experience.html`, `awards.html`: 기존 주소에서 Background로 이동
- `projects.html`: 연구 프로젝트, BK21 프로그램, 산업 프로젝트
- `etc.html`: Background의 튜터링 섹션으로 이동
- `cv.html`: 기존 주소에서 CV PDF로 이동 (메뉴에서 제외)
- `assets/css/style.css`: 모든 페이지 공통 스타일
- `CONTENT_CHECKLIST.md`: 항목별 필요한 자료

메뉴는 실제 HTML 페이지로 이동하며 현재 페이지는 `aria-current="page"`로 표시됩니다. 메뉴를 바꾸려면 네 주요 페이지의 공통 헤더를 함께 수정하세요.

## 로컬 확인

```sh
python3 -m http.server 8000
```

`http://localhost:8000`에서 확인하세요. `master` 브랜치에 푸시하면 기존 GitHub Pages 설정으로 배포됩니다.

## 자료 출처와 미확인 정보

연구 관심사와 연구 철학은 사용자가 제공한 대화, 논문 목록 및 프로젝트 맥락은 [개인 노션](https://so-young.notion.site/SoYoung-Park-Portfolio-173436f842eb80578cd9f85be574829e)을 참고했습니다. 현재 직함은 사용자 제공 대화의 Postdoctoral Researcher를 사용하며 노션의 과거 박사과정 소개는 옮기지 않았습니다.

ICML 2026 썸네일은 [DISL Publications](https://disl-lab.github.io/publications/)의 `https://disl-lab.github.io/assets/img/paper/26-icml-soyoung.png`입니다. 현재 국제 논문 8편의 그림과 확인된 Paper/Code 링크를 반영했습니다. `.publication-row`를 복제해 논문을 추가하고 그림 파일을 `assets/images/publications/`에 추가하세요. 그림은 `object-fit: contain`으로 전체가 보입니다.

사진 원본과 기존 `probabilistic_graphical_models/`, `structure.json`은 유지했습니다. 튜터링 자료는 Background에서 연결하며 기존대로 marked와 MathJax를 사용합니다.

추가 제공된 `CV_Soyoung Park.pdf`에서 산업 경력·학력·수상·발표를 반영했습니다. 제공된 CV는 원본 그대로 연결했으며 현재 UNIST 소속과 연락처는 About에 표시했습니다. 박사학위는 사용자가 2026년 8월 취득을 확인하여 반영했습니다.

그림과 기관 로고의 유지보수용 출처는 `assets/SOURCES.md`에 기록합니다. 공개 Publications 화면에는 별도 출처 문구를 표시하지 않으며, 썸네일을 클릭하면 그림을 확대합니다.

Projects are listed in `projects.html`; teaching, presentations, and skills are in `background.html`. `etc.html` redirects to Background. Publication figures open in a native dialog, with image links as the JavaScript-free fallback.

Navigation: About → Publications → Projects → Background. About links directly to the CV PDF in a new tab, without the HTML download attribute. Projects sections: Research → Industry → Programs.
