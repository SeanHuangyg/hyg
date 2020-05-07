import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Index from './Home/index';
// 引入路由
import intl from 'react-intl-universal';

// locale data
const locales = {
  "en-US": require('./locales/en-US.json'),
  "zh-CN": require('./locales/zh-CN.json'),
};

class Home extends Component {
  state = {
    initDone: false
  }
  componentDidMount() {
    this.loadLocales();
  }
  loadLocales() {
    // react-intl-universal 是单例模式, 只应该实例化一次
    intl.init({
      currentLocale: 'zh-CN', // TODO: determine locale here
      locales,
    })
    .then(() => {
	  this.setState({initDone: true});
    });
  }
  render() {
    return (
      this.state.initDone && <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Index} exact />
            {/* 添加路由 */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
ReactDOM.render(
  <Home />,
  document.getElementById('root'),
);
registerServiceWorker();