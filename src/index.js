import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './Home/index';
// 引入路由

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        {/* 添加路由 */}
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root'),
);