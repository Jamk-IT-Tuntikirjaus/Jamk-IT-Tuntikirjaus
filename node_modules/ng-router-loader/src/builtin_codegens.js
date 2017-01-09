"use strict";
function getRequireString(file, module) {
    return 'require(\'' + file + '\')[\'' + module + '\']';
}
exports.syncCodeGen = function (file, module) { return ("loadChildren: () => " + getRequireString(file, module)); };
exports.ensureCodeGen = function (file, module, loaderOptions, resourceOptions) {
    var requireString = getRequireString(file, module);
    var webpackChunkName = resourceOptions.chunkName ? ", '" + resourceOptions.chunkName + "'" : '';
    var result = [
        "loadChildren: () => new Promise(function (resolve) {",
        "  (require as any).ensure([], function (require: any) {",
        ("    resolve(" + requireString + ");"),
        ("  }" + webpackChunkName + ");"),
        "})"
    ];
    return loaderOptions.inline ? result.join('') : result.join('\n');
};
exports.systemCodeGen = function (file, module, opts) {
    var result = [
        ("loadChildren: () => System.import('" + file + "')"),
        ("  .then( (module: any) => module['" + module + "'] )")
    ];
    return opts.inline ? result.join('') : result.join('\n');
};
exports.BUILT_IN_CODEGENS = [
    { name: 'sync', codeGen: exports.syncCodeGen },
    { name: 'async-require', codeGen: exports.ensureCodeGen },
    { name: 'async-system', codeGen: exports.systemCodeGen }
];
//# sourceMappingURL=builtin_codegens.js.map