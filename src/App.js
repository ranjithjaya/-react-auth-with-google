import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrivatePage from './PrivatePage'
import PublicPage from './PublicPage'
import PrivateRouter from './PrivateRoute';
import PublicRouter from './PublicRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <PrivateRouter path="/private" component={PrivatePage} />                
          <PublicRouter path="/" component={PublicPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;