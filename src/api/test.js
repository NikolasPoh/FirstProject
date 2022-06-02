const Joi = require('joi');

exports.plugin = {
	name: 'test',
	version: '0.0.1',
	register: async (server,options) => {

		/*TODO Nikolas_Poh: Hello*/

		server.route({
			method: 'GET',
			path: '/',
			config: {
				async handler(req) {
					return "Hello"
				},
				description: 'Hello',
				tags: ['api'],
				auth:false
			}
		});

		/*TODO Nikolas_Poh: TEST*/

		server.route({
			method: 'GET',
			path: '/test',
			config: {
				async handler(req) {
					return "err"
				},
				description: 'test',
				tags: ['api'],
				auth:false
			}
		});
	}
}
