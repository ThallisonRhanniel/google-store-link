'use strict';
var assert          = require('assert');
var googleStoreLink = require('./');
var baseURL         = 'https://play.google.com/store/apps/details?id=';
var id              = 'com.duolingo';
var lang            = 'pt-PT';

// Test link construction (no null parameters).
it('should ', function () {
	assert.strictEqual(
		googleStoreLink(id), baseURL + id
	);
	assert.strictEqual(
		googleStoreLink(id, lang), baseURL + id + '&hl=' + lang
	);
});

// Test link construction (with null parameters).
it('should ', function () {
	assert.strictEqual(
		googleStoreLink(id, null), baseURL + id
	);
});
