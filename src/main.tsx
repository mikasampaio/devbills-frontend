import React from 'react';
import ReactDOM from 'react-dom/client';

import { CategoriesContext } from './hooks/category-context';
import { App } from './pages/Home';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CategoriesContext>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </CategoriesContext>,
);
