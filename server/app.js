const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { mongoConnect } = require("./config/mongo");

const server = new ApolloServer({
	typeDefs: [],
	resolvers: [],
});

(async () => {
	await mongoConnect();
	startStandaloneServer(server, {
		listen: { port: process.env.PORT || 4000 },
	}).then(({ url }) => {
		console.log(`🚀  Server ready at: ${url}`);
	});
})();
