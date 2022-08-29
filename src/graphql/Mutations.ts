import { User } from "@prisma/client";
import { mutationType, stringArg } from "nexus";

export const Mutation = mutationType({
    definition(t) {
        t.boolean('registerUser', {
            args: {
                name: stringArg(),
                email: stringArg(),
                password: stringArg(),
                username: stringArg(),
            },
            resolve: (_, { ...userDetails}: Omit<User, "id">, _ctx) => {

            },
        });
    },
});