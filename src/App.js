import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path={"/login"} element={<LoginPage />}></Route>
        <Route path={"/signup"} element={<RegisterPage />}></Route>
        <Route path={"/404"} element={<NotFoundPage />}></Route>
        {/* 공통 레이아웃(path 선언X): GNB, Footer */}
        <Route element={<MainLayout />}>
          <Route path={"/"} element={<MainPage />}></Route>
          {/* 동적매개변수 */}
          <Route path={"/product/:id"} element={<ProductDetailPage />}></Route>
        </Route>
        <Route element={<RequiredAuthLayout />}>
          <Route path={"/carts"} element={<CartPage />}></Route>
          <Route path={"/order"} element={<OrderPage />}></Route>
          <Route
            path={"/orders/complete/:id"}
            element={<OrderCompletePage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ⭐️ 동적매개변수란?
// - React Router에서 경로에 변수를 포함시키는 방법
// - useParams 훅을 사용하여 동적 매개변수 값을 추출할 수 있다
