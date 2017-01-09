"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const utils_1 = require("./utils");
describe('main test', function () {
    it('should transpile without sourceamps', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(10000);
            let config = {
                entry: utils_1.fixturePath(['babel', 'babel.ts'])
            };
            let loaderQuery = {
                sourceMap: false,
                useBabel: true,
                babelOptions: {
                    "presets": ["es2015"]
                }
            };
            let stats = yield utils_1.cleanAndCompile(utils_1.createConfig(config, { loaderQuery }));
            utils_1.expect(stats.compilation.errors.length).eq(0);
        });
    });
});
//# sourceMappingURL=without-sourcemap.js.map