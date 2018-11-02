# Lerna-JSConfig

> Generate jsconfig.json allowing VSCode to \"Open Definition\" your Lerna packages.

## Install

```shell
$ npm i --save lerna-jsconfig
```

## Usage

From inside your Lerna project:

## Output

```shell
❯ npx --no-install lerna-jsconfig
lerna notice cli v3.4.3
lerna success found 13 packages
jsconfig.json was updated in Lerna root: /Users/username/repos/lerna-project-dir
{ compilerOptions:
   { baseUrl: '.',
     paths:
      { '@project/comp-a': [Array],
        '@project/comp-b': [Array],
        '@project/comp-c': [Array] } } }
```

```shell
$ npx --no-install lerna-jsconfig
```

## WARNING!

This will overwrite any existing `jsconfig.json` paths.