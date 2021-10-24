module.exports = {
    "source": {
        "include": ["./"],
        "exclude": ["node_modules/"],
        "includePattern": ".*.js$"
    },
    "plugins": [

        "plugins/markdown"
    ],
    "opts": {
        "encoding": "utf8",
        "package": "./package.json",
        "readme": "./README.md",
        "recurse": true,
        "destination": "jsdocs"
    }
};