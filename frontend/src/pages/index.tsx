import type { NextPage } from "next";
import { signIn, useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();

  console.log(data);

  return (
    <div>
      <button onClick={() => signIn("google")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
