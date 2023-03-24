import { useState, useCallback, useMemo } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./index";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signIn = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      setUser(userCredentials);
      navigate("/");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signIn,
    }),
    [isLoading, error, user, signIn]
  );
};
