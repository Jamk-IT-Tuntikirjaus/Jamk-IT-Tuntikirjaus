/// <reference path="../../src/defines.d.ts" />
import { LoaderConfig } from '../interfaces';
import { expect } from 'chai';
export { expect };
export declare const defaultOutputDir: string;
export declare const defaultFixturesDir: string;
export interface ConfigOptions {
    loaderQuery?: LoaderConfig;
    watch?: boolean;
    include?: (string | RegExp)[];
    exclude?: (string | RegExp)[];
}
export declare function createConfig(conf: any, _options?: ConfigOptions): any;
export declare function chroot<T>(root: string, foo: () => Promise<T>): Promise<T>;
export declare function expectSource(source: string, fragment: string): void;
export declare function fixturePath(fileName: string | string[], fixturesDir?: string): string;
export declare function readFixture(fileName: string | string[], fixturesDir?: string): Promise<string>;
export declare function writeFixture(fileName: string | string[], text: string, fixturesDir?: string): Promise<any>;
export declare function touchFile(fileName: string): Promise<any>;
export declare function outputFileName(fileName: string, outputDir?: string): string;
export declare function readOutputFile(fileName?: string, outputDir?: string): Promise<string>;
export declare function cleanOutputDir(outputDir?: string): Promise<any>;
export declare function cleanAndCompile(config: any, outputDir?: string): Promise<any>;
export declare function compile(config: any): Promise<any>;
export declare function watch(config: any, cb?: (err, stats) => void): Watch;
export declare class Watch {
    resolves: ((arg: any[]) => void)[];
    close: () => void;
    call(err: any, stats: any): void;
    wait(): Promise<any>;
}
export declare class Fixture {
    private text;
    private fileName;
    constructor(text: string, ext?: string);
    path(): string;
    touch(): void;
    update(updater: (text: string) => string): void;
}
