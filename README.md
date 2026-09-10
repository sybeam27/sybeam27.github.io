# Soyoung Park — Academic homepage

별도 빌드나 JavaScript 없이 동작하는 정적 다중 페이지 홈페이지입니다.

## 페이지

- `index.html`: About, 소개와 연구 관심사, 연락처
- `publications.html`: 연도별 국제/국내 논문과 대표 썸네일
- `experience.html`: 연구 경력, 산업·공공 프로젝트, 학력
- `awards.html`: 수상·장학금
- `etc.html`: 튜터링 및 기타 자료
- `cv.html`: CV (PDF 준비 후 다운로드 링크 추가)
- `assets/css/style.css`: 모든 페이지 공통 스타일
- `CONTENT_CHECKLIST.md`: 항목별 필요한 자료

메뉴는 실제 HTML 페이지로 이동하며 현재 페이지는 `aria-current="page"`로 표시됩니다. 메뉴를 바꾸려면 여섯 페이지의 공통 헤더를 함께 수정하세요.

## 로컬 확인

```sh
python3 -m http.server 8000
```

`http://localhost:8000`에서 확인하세요. `master` 브랜치에 푸시하면 기존 GitHub Pages 설정으로 배포됩니다.

## 자료 출처와 미확인 정보

연구 관심사와 연구 철학은 사용자가 제공한 대화, 논문 목록 및 프로젝트 맥락은 [개인 노션](https://so-young.notion.site/SoYoung-Park-Portfolio-173436f842eb80578cd9f85be574829e)을 참고했습니다. 현재 직함은 사용자 제공 대화의 Postdoctoral Researcher를 사용하며 노션의 과거 박사과정 소개는 옮기지 않았습니다.

ICML 2026 썸네일은 [DISL Publications](https://disl-lab.github.io/publications/)의 `https://disl-lab.github.io/assets/img/paper/26-icml-soyoung.png`입니다. 나머지 그림과 미확인 Paper/Code 링크는 추가하지 않았습니다. `.publication-row`를 복제해 논문을 추가하고 `.thumbnail-placeholder`를 실제 이미지 링크로 교체하세요. 그림은 `object-fit: contain`으로 전체가 보입니다.

사진 원본과 기존 `probabilistic_graphical_models/`, `structure.json`은 유지했습니다. 튜터링 자료는 Etc에서 연결하며 기존대로 marked와 MathJax를 사용합니다.

추가 제공된 `CV_Soyoung Park.pdf`에서 산업 경력·학력·수상·발표를 반영했습니다. CV 상단의 박사과정 직함은 최신 여부가 불명확해 PDF 공개 링크는 아직 연결하지 않았습니다. 박사학위 수여 여부는 단정하지 않습니다.
