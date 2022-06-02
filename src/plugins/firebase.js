const admin = require("firebase-admin");
const Configs = require("../config/config.json");

admin.initializeApp({
	credential: admin.credential.cert(Configs.db),
	databaseURL: "https://hapi-project-57d8a-default-rtdb.europe-west1.firebasedatabase.app"
})
const db = admin.database();

module.exports={db};
