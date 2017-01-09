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
describe('checker test', function () {
    this.timeout(5000);
    let fixture = new utils_1.Fixture(`
        let a: string;
        function check(arg1: string) { }
        check(a);
    `, '.ts');
    let config = utils_1.createConfig({
        entry: fixture.path(),
    }, {
        watch: true,
    });
    it('should watch changes', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield utils_1.cleanOutputDir();
            let watcher = yield utils_1.watch(config);
            {
                const [err, stats] = yield watcher.wait();
                utils_1.expect(err).not.ok;
                utils_1.expect(stats.compilation.errors).lengthOf(0);
            }
            {
                fixture.update(text => text.replace('let a: string;', 'let a: number;'));
                const [err, stats] = yield watcher.wait();
                utils_1.expect(err).not.ok;
                utils_1.expect(stats.compilation.errors).lengthOf(0);
            }
            watcher.close();
        });
    });
});
//# sourceMappingURL=watch-type-errors.js.map