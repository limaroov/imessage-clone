import { CreateUsernameResponse, GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: async (
      _: any,
      args: { username: string },
      context: GraphQLContext
    ): Promise<CreateUsernameResponse> => {
      const { username } = args;
      const { prisma, session } = context;

      // Check if the user is signed in
      if (!session?.user) {
        return {
          error: "Not Authorized !",
        };
      }
      const { id } = session.user;

      try {
        // Check if the username is already taken :
        const existingUsername = await prisma.user.findUnique({
          where: { username },
        });
        if (existingUsername) {
          return {
            error: "Username already taken.",
          };
        }
        // Update user
        await prisma.user.update({
          where: { id },
          data: {
            username,
          },
        });

        return {
          success: true,
        };
      } catch (error: any) {
        console.log("Create Username error : ", error);
        return {
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
