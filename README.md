# bundl-write

*Write bundles to disk*

*Runs with the amazing [Bundl](https://github.com/seebigs/bundl) build tool*

## Install

```
$ npm install --save-dev bundl-write
```

## Use

```js
var bundl = require('bundl');
var minify = require('bundl-minify');
var rename = require('bundl-rename');
var write = require('bundl-write');

bundl(targets)
    .then(write())
    .then(minify())
    .then(rename('.min.js'))
    .then(write())
    .go();
```

## Options

### Defaults to the `outputDir` of each added bundle
```js
bundl()
    .add(targets, { outputDir: '../one' })
    .add(targets, { outputDir: '../two' })
    .then(write())
    .go();
```

### Override outputDir with a String
```js
bundl(targets)
    .then(write('../dist'))
    .go();
```

### Override with an options Object
```js
var options = {
    outputDir: '../dist'
};

bundl(targets)
    .then(write(options))
    .go();
```
