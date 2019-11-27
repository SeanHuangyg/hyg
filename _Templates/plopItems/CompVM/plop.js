const npath = require('path');

module.exports = function (plop, data) {
    plop.setGenerator('vm-component', {

        prompts: [{
            type: 'input',
            name: 'compName',
            message: '组件名称是什么?',
        }, {
            type: 'list',
            default: 'no',
            choices: ['yes', 'no'],
            name: 'shouldIifeCycle',
            message: '是否需要引入生命周期函数？'
        }],

        actions: [{
            type: 'add',
            data,
            path: '{{currentPath}}/{{properCase compName}}/index.js',
            templateFile: npath.resolve(__dirname, 'index.js.hbs')
        }, {
            type: 'add',
            data,
            path: '{{currentPath}}/{{properCase compName}}/index.less',
            templateFile: npath.resolve(__dirname, 'index.less.hbs')
        }]
    })
};
