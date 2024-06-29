import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // メモ：利用していないので削除予定（そもそも何が嬉しいのか調べる予定）

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // メモ：利用していないので削除予定（そもそも何が嬉しいのか調べる予定）
