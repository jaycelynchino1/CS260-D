import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Start from "./pages/start";
import Type from "./pages/type";
import Style from "./pages/style";
import Color from "./pages/color";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="start" element={<Start />} />
          <Route path="type" element={<Type />} />
          <Route path="style" element={<Style />} />
          <Route path="color" element={<Color />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}