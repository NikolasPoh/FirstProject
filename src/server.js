const Hapi = require('@hapi/hapi');

const init = async (configs) => {
	const {host,port} = configs.server;
	const server = new Hapi.Server({
		debug: { request: ['error'] },
		host:host,
		port: port//,
		//routes: {
		//	cors: {
		//		origin: ['*'],
		//		additionalHeaders: ['cache-control', 'x-requested-with','x-custom-header']
		//	}
		//}
	});
	for(const plugin of configs.server.plugins){
		await require('./plugins/'+plugin).register(server,configs);
	}
	for(const module of configs.server.modules){
		await server.register({plugin:require('./api/'+module),options:{configs:configs.modules,func:require('./functions/test')}});
	}
	return server;
};

module.exports={init};
