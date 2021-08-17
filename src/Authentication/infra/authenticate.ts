import firebase from "./base";
export const signIn = async (provider: any): Promise<firebase.User | null> => {
  try {
    const { user } = await firebase.auth().signInWithPopup(provider);
    return user;
  } catch (err) {
    console.log("Error Login", err);
    return null;
  }
};

export const signOut = async () => {
  await firebase.auth().signOut();
};
