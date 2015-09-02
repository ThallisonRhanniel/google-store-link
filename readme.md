# google-store-link [![Build Status](https://travis-ci.org/xipasduarte/google-store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/google-store-link)


## Install

```
$ npm install --save google-store-link
```


## Usage

```js
var googleStoreLink = require('google-store-link');

googleStoreLink('com.duolingo', lang);
//=> https://play.google.com/store/apps/details?id=com.duolingo
```


## API

### googleStoreLink(id, lang)

#### id

*Required*

Type: `string`

The string that identifies the application on Google Play Store.

`https://play.google.com/store/apps/details?id=[the_id]`

#### lang
*Optional*

Type: `string`;

Default: `null`;

`https://play.google.com/store/apps/details?id=[the_id]&hl=[lang]`

The language can be generally defined like "en" (English) or "pt" (Portuguese), but also more localized like "pt-PT" (Portguguese - Portugal).

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
