import { makeSchema } from "nexus"
import { Query } from "./Query";
import path from "path";
import { Mutation } from "./Mutation";

export const getSchema = () => {
    const schema = makeSchema({
        types: [Query, Mutation],
        outputs: {
            schema: path.join(process.cwd(), "nexus", "schema.graphql"),
            typegen: path.join(process.cwd(), "nexus", "nexus.ts"),
        }
    });

    return schema;
};