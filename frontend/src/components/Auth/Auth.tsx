import { Center, Stack, Text, Button, Image, Input } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    try {
      // Create username mutation
    } catch (error) {
      console.log("On Submit Error :", error);
    }
  };

  return (
    <Center height="100vh" border="1px solid red">
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
