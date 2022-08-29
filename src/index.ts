import express from "express";
import { ApolloServer } from "apollo-server-express";
import { getSchema } from "./graphql/schema";

const main = async () => {
    const app = express();

    const schema = getSchema();

    const apolloServer = new ApolloServer({
        schema,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

main().catch((err) => {
    console.error(err);
})