import React from 'react';
import ReactDOM from 'react-dom/client'; // メモ：React 18 の記述方法。これに合わせてReactDOM.createRootの記述方法も変更
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
