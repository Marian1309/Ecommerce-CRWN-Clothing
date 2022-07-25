import { signInWithGooglePopup, createUserDocumnetFromAuth } from "../../utils/firebase/Firebase";

import "./SignIn.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </>
  );
};

export { SignIn };
