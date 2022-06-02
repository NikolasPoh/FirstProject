const Joi = require('joi');
//https://app-hapi.herokuapp.com/

exports.plugin = {
	name: 'test',
	version: '0.0.1',
	register: async (server,options) => {

		/*TODO Nikolas_Poh: Hello*/

		server.route({
			method: 'GET',
			path: '/{name}',
			config: {
				async handler(req) {
					try {
						const {db}=require('../plugins/firebase'), {name}=req.params;

						const wordsRef = await db.ref(name).once('value');
						return `<h1>${wordsRef.val()}</h1>`
					}catch(err){
						console.log(err)
					}
				},
				description: 'Hello',
				tags: ['api'],
				validate:{
					params: Joi.object({name:Joi.string().required()})
				},
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
