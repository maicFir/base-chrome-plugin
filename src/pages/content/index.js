/**
 * @description index.js content内容挂在到当前打开的页面中
 * @author maicFir
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const div = document.createElement("div");
const meta = document.createElement("meta");
// 解决访问第三方图片403问题
meta.name = "referrer";
meta.content = "no-referrer";
div.id = "plugin-root";
const dom = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("head")[0];
header.appendChild(meta);
dom.appendChild(div);
const firstChild = dom.firstChild;
dom.insertBefore(div, firstChild);

const root = ReactDOM.createRoot(document.getElementById("plugin-root"));
root.render(<App />);
