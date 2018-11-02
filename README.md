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
      { '@sgm/network-indicator': [Array],
        '@sgm/passage': [Array],
        '@sgm/question-blanked': [Array],
        '@sgm/layout-jumbo-card': [Array],
        '@sgm/alert-modal': [Array],
        '@sgm/directions-block': [Array],
        '@sgm/general-modal': [Array],
        '@sgm/app-bar': [Array],
        '@sgm/mcq': [Array],
        '@sgm/nav-bar-buttons': [Array],
        '@sgm/api-ri': [Array],
        '@sgm/question-page-ri': [Array],
        '@sgm/welcome-page-ri': [Array] } } }
```

```shell
$ npx --no-install lerna-jsconfig
```

## WARNING!

This will overwrite any existing `jsconfig.json` paths.