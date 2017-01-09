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
describe('salsa test', function () {
    it('should compile ts file with js invoke', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let config = {
                entry: utils_1.fixturePath(['salsa', 'index.ts'])
            };
            let configFileName = utils_1.fixturePath(['salsa', 'tsconfig.json']);
            let loaderQuery = { configFileName, configFileContent: null };
            let stats = yield utils_1.cleanAndCompile(utils_1.createConfig(config, { loaderQuery }));
            utils_1.expect(stats.compilation.errors.length).eq(1);
        });
    });
    xit('should compile js file as entry point', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let config = {
                entry: utils_1.fixturePath(['salsa', 'index.js'])
            };
            let configFileName = utils_1.fixturePath(['salsa', 'tsconfig.json']);
            let loaderQuery = { configFileName, configFileContent: null };
            let stats = yield utils_1.cleanAndCompile(utils_1.createConfig(config, { loaderQuery }));
            utils_1.expect(stats.compilation.errors.length).eq(1);
        });
    });
});
//# sourceMappingURL=salsa.js.map