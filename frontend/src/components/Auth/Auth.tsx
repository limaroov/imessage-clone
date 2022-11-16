import { Center, Stack, Text, Button, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import UserOpeations from "../../graphql/operations/user";
import { CreateUsernameData, CreateUsernameVariables } from "../../utils/types";
import { toast } from "react-hot-toast";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState("");
  const [createUsername, { loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(UserOpeations.Mutations.createUsername);

  const onSubmit = async () => {
    if (!username) return;

    try {
      const { data } = await createUsername({ variables: { username } });
      if (!data?.createUsername) {
        throw new Error();
      }

      if (data?.createUsername.error) {
        const {
          createUsername: { error },
        } = data;

        throw new Error(error);
      }

      toast.success("Username successfully created! 🚀");
      // reload session to obtain new username
      reloadSession();
    } catch (error: any) {
      toast.error(error?.message);
      console.log("On Submit Error :", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack align="center" spacing={8}>
        {session ? (
          <>
            <Text fontSize={"3xl"}>Create Username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button width="100%" onClick={onSubmit}>
              Save{" "}
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">MessengerQL</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image
                  height="20px"
                  src="/images/googlelogo.png"
                  alt="googlelogo"
                />
              }
            >
              Continue with Google{" "}
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
