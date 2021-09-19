// 引入一个包
const path = require("path");

// 引入html插件
const HTMLwebpackplugin = require("html-webpack-plugin");

// 引入clean插件
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// webpack中的所有配置信息写在module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, "dist"),
        // 打包后文件的文件名
        filename: "bundle.js",
        // 配置环境
        environment:{
            arrowFunction: false,
            const: false,
        }
    },

    mode: 'development', // 设置mode

    // 指定webpack打包时使用的模块
    module: {
        // 指定该要加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,  //匹配ts结尾的文件
                // 要使用的loader,执行顺序从后往前
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets:{
                                            "chrome":"88",
                                            "ie":"4"
                                        },
                                        // 指定core.js的版本
                                        "corejs":"3",
                                        // 指定使用corejs的方式，usage-按需加载
                                        "useBuiltIns":"usage"                                    
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    //引入postcss
                    {
                        loader: 'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader',
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLwebpackplugin({
            // title: "这是标题",
            template: "./src/index.html"
        })
    ],

    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}