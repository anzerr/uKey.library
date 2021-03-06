'use strict';

const crypto = require('crypto');

module.exports = {
	session: crypto.randomBytes(256).toString('hex'),
	crypto: {
		type: 'sha256'
	},
	uniqueKey: {
		time: 1459433440765, // To regenerate "new Date() - 0" if you update this bump up the version
		version: 1
	}
};

