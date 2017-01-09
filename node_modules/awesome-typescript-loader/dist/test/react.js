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
describe('react test', function () {
    it('should compile proejct with react typings', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const config = utils_1.createConfig({
                entry: utils_1.fixturePath(['react', 'index.tsx'])
            }, {
                loaderQuery: {
                    configFileContent: undefined,
                    configFileName: utils_1.fixturePath(['react', 'tsconfig.json'])
                }
            });
            let stats = yield utils_1.chroot(utils_1.fixturePath('react'), () => __awaiter(this, void 0, void 0, function* () {
                return yield utils_1.cleanAndCompile(config);
            }));
            utils_1.expect(stats.compilation.errors.length).eq(2);
            utils_1.expect(stats.compilation.errors[0].toString().indexOf('ModuleNotFoundError: Module not found:')).eq(0);
            utils_1.expect(stats.compilation.errors[1].toString().indexOf('ModuleNotFoundError: Module not found:')).eq(0);
        });
    });
});
//# sourceMappingURL=react.js.map