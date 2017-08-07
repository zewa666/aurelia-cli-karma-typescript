'use strict';
const project = require('./aurelia_project/aurelia.json');
const tsconfig = require('./tsconfig.json');

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "node_modules/reflect-metadata/Reflect.js", include: true },
      project.transpiler.source,
      project.unitTestRunner.source
    ],
    preprocessors: {
      [project.transpiler.source]: ["karma-typescript"],
      [project.unitTestRunner.source]: ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    karmaTypescriptConfig: {
      compilerOptions: Object.assign({}, tsconfig.compilerOptions, { module: "commonjs" }),
      exclude: ["aurelia_project/**/*.ts"],
      reports: {
        "cobertura": {
          "directory": "./coverage",
          "filename": "coverage.xml"
        },
        "html": "coverage",
        "text-summary": ""
      },
    },
    singleRun: false,
    client: {
      args: ['aurelia-root', project.paths.root]
    }
  });
};
