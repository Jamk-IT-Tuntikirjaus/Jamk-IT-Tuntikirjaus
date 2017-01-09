"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const temp = require('temp').track();
require('source-map-support').install();
const chai_1 = require("chai");
exports.expect = chai_1.expect;
const webpack = require('webpack');
const BPromise = require('bluebird');
const mkdirp = BPromise.promisify(require('mkdirp'));
const rimraf = BPromise.promisify(require('rimraf'));
const readFile = BPromise.promisify(fs.readFile);
const writeFile = BPromise.promisify(fs.writeFile);
const loaderDir = path.join(process.cwd(), 'dist');
exports.defaultOutputDir = path.join(process.cwd(), 'src', 'test', 'output');
exports.defaultFixturesDir = path.join(process.cwd(), 'src', 'test', 'fixtures');
let defaultOptions = {
    watch: false,
};
function createConfig(conf, _options = defaultOptions) {
    let options = _.merge({}, defaultOptions, _options);
    const defaultConfig = {
        watch: false,
        output: {
            path: exports.defaultOutputDir,
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    test: defaultOptions && defaultOptions.loaderQuery && defaultOptions.loaderQuery.allowJs
                        ? /\.(tsx?|jsx?)/
                        : /\.tsx?/,
                    loader: loaderDir,
                    query: Object.assign({
                        target: 'es6',
                    }, {
                        configFileContent: {
                            exclude: ["*"]
                        }
                    }, options.loaderQuery)
                },
            ],
        },
        plugins: []
    };
    let loader = defaultConfig.module.loaders[0];
    if (options.include) {
        loader.include = (loader.include || []).concat(options.include);
    }
    if (options.exclude) {
        loader.exclude = (loader.exclude || []).concat(options.exclude);
    }
    if (options.watch) {
        defaultConfig.watch = true;
    }
    return _.merge(defaultConfig, conf);
}
exports.createConfig = createConfig;
function chroot(root, foo) {
    return __awaiter(this, void 0, void 0, function* () {
        let cwd = process.cwd();
        process.chdir(root);
        let result = yield foo();
        process.chdir(cwd);
        return result;
    });
}
exports.chroot = chroot;
function expectSource(source, fragment) {
    chai_1.expect(source.replace(/\s/g, '')).include(fragment.replace(/\s/g, ''));
}
exports.expectSource = expectSource;
function fixturePath(fileName, fixturesDir = exports.defaultFixturesDir) {
    return path.join.apply(path, [fixturesDir].concat(fileName));
}
exports.fixturePath = fixturePath;
function readFixture(fileName, fixturesDir = exports.defaultFixturesDir) {
    let filePath = fixturePath(fileName, fixturesDir);
    return readFile(filePath).then(buf => buf.toString());
}
exports.readFixture = readFixture;
function writeFixture(fileName, text, fixturesDir = exports.defaultFixturesDir) {
    let filePath = fixturePath(fileName, fixturesDir);
    return writeFile(filePath, text);
}
exports.writeFixture = writeFixture;
function touchFile(fileName) {
    return readFile(fileName)
        .then(buf => buf.toString())
        .then(source => writeFile(fileName, source));
}
exports.touchFile = touchFile;
function outputFileName(fileName, outputDir = exports.defaultOutputDir) {
    return path.join(exports.defaultOutputDir, fileName);
}
exports.outputFileName = outputFileName;
function readOutputFile(fileName, outputDir = exports.defaultOutputDir) {
    return readFile(outputFileName(fileName || 'main.js', outputDir)).then(buf => buf.toString());
}
exports.readOutputFile = readOutputFile;
function cleanOutputDir(outputDir = exports.defaultOutputDir) {
    return rimraf(outputDir)
        .then(() => mkdirp(outputDir));
}
exports.cleanOutputDir = cleanOutputDir;
function cleanAndCompile(config, outputDir = exports.defaultOutputDir) {
    return cleanOutputDir(outputDir)
        .then(() => compile(config));
}
exports.cleanAndCompile = cleanAndCompile;
function compile(config) {
    return new Promise((resolve, reject) => {
        let compiler = webpack(config);
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(stats);
            }
        });
    });
}
exports.compile = compile;
function watch(config, cb) {
    let compiler = webpack(config);
    let watch = new Watch();
    let webpackWatcher = compiler.watch({}, (err, stats) => {
        watch.call(err, stats);
        if (cb) {
            cb(err, stats);
        }
    });
    watch.close = webpackWatcher.close;
    return watch;
}
exports.watch = watch;
class Watch {
    constructor() {
        this.resolves = [];
    }
    call(err, stats) {
        this.resolves.forEach(resolver => {
            resolver([err, stats]);
        });
        this.resolves = [];
    }
    wait() {
        return new Promise((resolve, reject) => {
            this.resolves.push(resolve);
        });
    }
}
exports.Watch = Watch;
class Fixture {
    constructor(text, ext = '.tsx') {
        this.text = text;
        let tmpobj = temp.openSync({
            prefix: 'atl-',
            suffix: '.tsx'
        });
        this.fileName = tmpobj.path;
        fs.writeFileSync(this.fileName, text);
    }
    path() {
        return this.fileName;
    }
    touch() {
        touchFile(this.fileName);
    }
    update(updater) {
        let newText = updater(this.text);
        this.text = newText;
        fs.writeFileSync(this.fileName, newText);
    }
}
exports.Fixture = Fixture;
//# sourceMappingURL=utils.js.map