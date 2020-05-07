/**
 * @file: Active 组件
 * @author: author
 * @date: 2019-11-27
 * @description: Active 组件
 */

import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './index.less';
import apis from '../api/api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 生命周期函数（常用到的）
  // 组件将要挂载的时候触发的生命周期函数
  componentWillMount() {
    console.log('组件将要挂载');
    // apis.get( window.pckObj.hongbao + '/接口').then(res => {
    //   if (res) {
    //     if (res.data.code == 200) {
    //       console.log(res.data.result)
    //     }
    //   }
    // })
  }
  // 组件挂载完成的时候触发的生命周期函数
  componentDidMount() {
    // dom操作放在这个里面
    // 请求数据也放在这个里面
    console.log('组件将要挂载');
  }
  // 你在父组件里面改变props传值的时候触发的
  componentWillReceiveProps(nextProps) {
    // 该场景下使用时注意，旧属性通过this.props来获取，并且与nextProps相对比是否改变
    // 当发生改变时才去实现你的业务逻辑。
    console.log('父子组件传值，父组件里面改变了props的值触发的方法')
  }
  // 组件销毁的时候触发的生命周期函数
  // 用在组件销毁的时候执行操作
  componentWillUnmount() {
    console.log('组件销毁了');
  }

  render() {
    const phone = intl.get('HELLO', { name: 'Tony', where: 'Alibaba' })
    return (
      <div className="homeComponent">
        {phone}
      </div>
    );
  }
}

export default App;

