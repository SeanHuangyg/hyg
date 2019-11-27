/**
 * @file: Index 组件
 * @author: author
 * @date: 2019-11-27
 * @description: Index 组件
 */

import React, { Component } from 'react';
import './index.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 生命周期函数

  render() {
    return (
      <div className="index">
        IndexComponent!
      </div>
    );
  }
}

export default App;

