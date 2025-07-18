import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

/* 앱 초기화 for 병렬 렌더링 기능 */
/* Automatic batching(여러 상태 업데이트 처리), startTransition(느린 작업 부드럽게 처리), useDeferredValue, useSyncExternalStore */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
