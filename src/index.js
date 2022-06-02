const Server = require("./server");
const Configs = require("./config/config.json");

const start = async (config) => {
	try {
		const server = await Server.init(config);
		await server.start();
		console.log("Server running at:", server.info.uri+'/documentation');
	} catch (err) {
		console.error("Error starting server: ", err.message);
		throw err;
	}
};

const modules = Configs["modules"];
const server = Configs["server"];
const swagger = Configs["swagger"];

start({modules,server,swagger}).then();
