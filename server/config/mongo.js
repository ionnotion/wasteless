const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URL || "http://localhost:4000";

let options;

if (process.env.NODE_ENV) {
	options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverApi: ServerApiVersion.v1,
	};
} else {
	options = {};
}

const client = new MongoClient(uri, options);

let db = null;

const mongoConnect = async () => {
	try {
		await client.connect();

		const database = client.db("Wasteless");

		db = database;
	} catch (error) {
		console.log(error);
	}
};

const getDatabase = () => {
	return db;
};

module.exports = { mongoConnect, client, getDatabase };