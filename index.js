#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');
const findUp = require('find-up');

const lernaPkgList = String(execSync('lerna list --json'));
const pkgListJson = JSON.parse(lernaPkgList);

const lernaFilePath = findUp.sync('lerna.json');
const lernaRoot = path.parse(lernaFilePath).dir;

const jsConfigPath = path.join(lernaRoot, 'jsconfig.json');
const jsConfig = require(jsConfigPath);

const newJsConfigPaths = {};

pkgListJson.forEach(package => {
    const packageJsonLocation = path.join(package.location, 'package.json');
    const packageJson = require(path.join(packageJsonLocation));
    
    const hasMain = Reflect.has(packageJson, 'main');
    const hasModule = Reflect.has(packageJson, 'module');

    const entryPoint = hasMain && hasModule ? 
        packageJson.module : packageJson.main;

    const entryPath = path.join(package.location, entryPoint);
    const relEntryPath = path.relative(lernaRoot, entryPath);
    newJsConfigPaths[package.name] = [`./${relEntryPath}`];
});

jsConfig.compilerOptions.paths = newJsConfigPaths;

fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfig, null, 2));

console.log(`jsconfig.json was updated in Lerna root: ${lernaRoot}`);
console.log(jsConfig);
