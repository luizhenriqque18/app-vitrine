module.exports = {
    presets: [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": "3",
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false,
                "version": "7.0.0-beta.0"
            }
        ]
    ]
};