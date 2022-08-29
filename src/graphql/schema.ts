import { makeSchema } from "nexus"
import { Query } from "./Query"
import path from "path";

export const getSchema = () => {
    const schema = makeSchema({
        types: [Query],
        outputs: {
            schema: path.join(process.cwd(), "nexus", "schema.graphql"),
            typegen: path.join(process.cwd(), "nexus", "nexus.ts"),
        }
    })
    return schema;
}