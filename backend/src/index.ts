import { PrismaClient } from "@prisma/client";
import { GraphQLContext } from "./utils/types";
import { getSession } from "next-auth/react";

import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";

import express from "express";
import http from "http";
import * as dotenv from "dotenv";

import { Session } from "./utils/types";

import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";

async function main() {
  dotenv.config();
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // context params
  const prisma = new PrismaClient();
  // const pusub

  const corsOptions = {
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  };

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    // this context is accessable in the resolvers
    context: async ({ req, res }): Promise<GraphQLContext> => {
      const session = (await getSession({ req })) as Session;
      return { session, prisma };
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app, cors: corsOptions });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

main().catch((err) => console.log(err));
