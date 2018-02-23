'use strict';

const request = require('request');

let login = (url, username, password) => {
	return new Promise((resolve, reject) => {
		request.get(
			url,
			{
				auth: {
					user: username,
					password: password,
				},
			},
			(err, res, body) => {
				if (err) {
					reject(err);
				} else if (res) {
					if (res.statusCode == 200) {
						resolve(res);
					} else {
						reject(new Error(res));
					}
				} else {
					reject(new Error(body));
				}
			}
		);
	});
};

module.exports.login = login;
