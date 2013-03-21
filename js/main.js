require.config({
    //baseUrl: "js",
    // pathsオプションの設定。"module/name": "path"を指定します。拡張子（.js）は指定しません。
    paths: {
        /*
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min'
        ,'json2': '//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2'
        ,'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min'
        ,'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min'
        */
        'jquery': 'vendor/jquery-1.9.0.min'
        ,'json2':  'vendor/json2'
        ,'underscore': 'vendor/underscore-1.4.4.min'
        ,'backbone': 'vendor/backbone-0.9.10.min'
    },
    // shimオプションの設定。モジュール間の依存関係を定義します。
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery','json2','underscore']
            , exports: 'Backbone'
        }
    }
});
require(["views/app"], function(AppView) {
    new AppView.AppView();
});
