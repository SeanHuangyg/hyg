const npath = require('path');

module.exports = function (plop, data) {
    plop.setGenerator('module', {
        description: 'change route',
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
        }, {
            type: 'modify',
            data,
            path: '{{currentPath}}/index.js',
            pattern: /(\/\/ 引入路由)/gi,
            templateFile: npath.resolve(__dirname, 'importModify.hbs')
        }, {
            type: 'modify',
            data,
            path: '{{currentPath}}/index.js',
            pattern: /({\/\* 添加路由 \*\/})/gi,
            templateFile: npath.resolve(__dirname, 'domModify.hbs')
        }]
    })
    plop.setGenerator('component', {
        description: 'small building blocks',
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
            path: '{{currentPath}}/{{properCase compName}}Component/index.js',
            templateFile: npath.resolve(__dirname, 'index.js.hbs')
        }, {
            type: 'add',
            data,
            path: '{{currentPath}}/{{properCase compName}}Component/index.less',
            templateFile: npath.resolve(__dirname, 'index.less.hbs')
        }]
    })
};
