import { useState, useCallback, useMemo } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index';
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signIn = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredentials);
      navigate('/');
    } catch (error) {
      setError(error);
      alert('이메일 또는 비밀번호를 다시 확인해주세요.');
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
