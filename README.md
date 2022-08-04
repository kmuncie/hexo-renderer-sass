[Sass] renderer plugin for [Hexo]
=================================

[![npm version](https://badge.fury.io/js/hexo-renderer-sass.svg)](https://badge.fury.io/js/hexo-renderer-sass)
[![Build Status](https://travis-ci.org/kmuncie/hexo-renderer-sass.svg?branch=master)](https://travis-ci.org/kmuncie/hexo-renderer-sass)
[![Coverage Status](https://coveralls.io/repos/github/kmuncie/hexo-renderer-sass/badge.svg?branch=master)](https://coveralls.io/github/kmuncie/hexo-renderer-sass?branch=master)

> A hexo plugin for sass

## Install
```sh
npm install --save-dev https://github.com/kmuncie/hexo-renderer-sass
```

## Config
Anything specified under the key `sass` in your `_config.yml` files will
be [passed directly] to the `sass.render()` call. Check out the sass options docs
for all available settings.

### _config.yml
```yaml
sass:
outputStyle: nested
precision: 5
sourceComments: false
```

### Inheritance
The config object passed to sass is constructed by merging properties from
the following locations using a least-specific-first order:

1. Hardcoded Defaults (`{outputStyle: 'compressed', sourceComments: false}`)
2. Theme specific `_config.yml`
3. Blog root `_config.yml`


## ♥︎
Questions, comments, concerns?
* [@knksmith57](https://github.com/knksmith57)


[Hexo]:                   http://hexo.io
[Sass]:                   http://sass-lang.com/
[passed directly]:        index.js:#L22

