## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요.
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **구현**

📎**과제 1. 상품 목록 페이지 개발**

- [x] 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- [x] 한 개의 UI 라이브러리를 선정해 사용해보세요. -> 테일윈드 사용
- [x] 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- [x] 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- [x] '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.

* 상품 목록 페이지
  <img width="1365" alt="스크린샷 2023-07-25 오전 1 31 53" src="https://github.com/kimchanho97/algorithm/assets/104095041/0cd3b91c-a903-4711-8de8-a74d45168a18">

</br>

📎**과제 2. 장바구니 페이지 개발**

- [x] 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- [x] 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- [x] '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- [x] 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.

</br>

- 장바구니 페이지
  <img width="1365" alt="스크린샷 2023-07-25 오전 1 37 13" src="https://github.com/kimchanho97/algorithm/assets/104095041/84f4c9fd-0c1b-4006-b97d-0c3f6fd6f98b">

</br>

### 라이브러리

- api 요청 및 응답: axios
- style: tailwindcss
- 상태관리: redux toolkit, redux-persist
- 데이터페칭: redux-query
- 라우팅: react-router-dom
- 유틸리티: lodash
