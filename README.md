1.创建脚手架
create-react-app 项目名称 --template typescript
2.配置路径别名
配置路径别名---React_h5 路径别名设置-CSDN博客

3.添加组件库
npm i antd --save
  App.tsx 文件  引用 ant design react

import React from 'react';
 
import { Button } from 'antd';
 
function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
 
export default App;
语言汉化

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
 
import { ConfigProvider } from 'antd';
import zhCN from "antd/locale/zh_CN"
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
4.路由
npm i react-router-dom
npm i @reduxjs/toolkit react-redux