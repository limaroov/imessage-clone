import { PrismaClient } from "@prisma/client";
import { DefaultSession, ISODateString } from "next-auth";

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  // pubsub
}

// Users

export interface Session {
  user: User;
  expires: ISODateString;
}

export interface User {
  id: string;
  username: string;
  image: string;
  email: string;
  emailVerified: boolean;
  name: string;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
