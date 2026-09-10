# Soyoung Park — Academic homepage

빌드 도구나 설치 과정 없이 GitHub Pages에서 제공하는 정적 홈페이지입니다.

## 로컬에서 보기

저장소 폴더에서 실행한 뒤 `http://localhost:8000`을 여세요.

```sh
python3 -m http.server 8000
```

## 디자인 방향

DLI 홈페이지의 밝은 배경, 파란색 포인트, 단정한 산세리프 제목과 상단 메뉴를 참고했습니다. 개인 연구 철학 문구의 세리프 서체와 세로 사진은 유지했습니다.

## 수정할 파일

- `index.html`: 소개, 연구 방향, 논문, 경력, 프로필 링크
- `assets/css/style.css`: 색상, 글꼴, 모바일 레이아웃
- `assets/images/profile.jpg`: 홈페이지용 사진 (원본 졸업사진 보존)
- `favicon.svg`: 브라우저 아이콘
- `probabilistic_graphical_models/`: 홈페이지 하단 `Etc`에서 연결하는 기존 튜터링 자료. 경로와 내용 유지
- `structure.json`: 튜터링 챕터 목록

홈페이지는 JavaScript나 외부 폰트 없이 작동합니다. 기존 튜터링 페이지는 기존대로 marked와 MathJax를 사용합니다.

## 확인 후 채울 정보

첨부 대화에서 확인된 이름, Postdoctoral Researcher 직함, 연구 관심사와 연구 철학을 반영했습니다. 논문 1편은 DISL 공개 목록에서 확인해 추가했으며, 미확인 논문과 상세 경력은 임의로 추가하지 않았습니다. `index.html`의 `TODO` 주석을 검색해 아래 정보를 입력하세요.

- 현재 소속과 재직 기간
- 대표 논문 제목, 저자 순서, 학회/저널, 연도, 논문·코드 URL
- 이전 경력의 기관, 직책, 기간
- Google Scholar, ORCID, 이메일 주소 (미확인 항목은 링크를 만들지 않음)
- CV 파일: `assets/cv/Soyoung_Park_CV.pdf`를 추가하고 `#cv` 안내를 다운로드 링크로 교체

## 논문 썸네일 구성

`index.html`의 `.publication-row`를 복제해 논문을 추가합니다. 연도별로 `.publication-year`를 두고 최신 순으로 배치합니다.

- 왼쪽: `assets/images/publications/`에 저장한 대표 그림. 전체 그림이 보이도록 `object-fit: contain` 적용
- 오른쪽: 학회·연도 배지, 연구 주제, 논문 제목, 저자, 학회/저널명, 확인된 링크
- 본인 이름은 `<strong>Soyoung Park</strong>`으로 강조
- 모바일에서는 그림 위 / 서지 정보 아래로 배치
- 이미지 클릭으로 원본 그림 확인 가능
- Paper / Code는 실제 URL이 확인된 경우에만 추가

현재 ICML 2026 논문과 썸네일은 [DISL Publications](https://disl-lab.github.io/publications/)의 Soyoung Park 항목을 참고했습니다. 원본 이미지: `https://disl-lab.github.io/assets/img/paper/26-icml-soyoung.png`. 논문·코드 직접 링크는 해당 목록에 없어 아직 추가하지 않았습니다.

## 튜터링 챕터 추가

기존 `probabilistic_graphical_models/chapter01/` 구조를 참고해 새 챕터 폴더에 `index.html`과 `notes.md`를 추가하고, `structure.json`의 해당 폴더 목록에도 등록합니다.

## 게시

변경 사항을 검토하고 저장소의 GitHub Pages 게시 브랜치에 반영하면 됩니다. 현재 게시 브랜치는 `master`입니다. 해당 브랜치로 푸시한 후 GitHub Pages 배포가 완료되면 공개 사이트에 반영됩니다.
